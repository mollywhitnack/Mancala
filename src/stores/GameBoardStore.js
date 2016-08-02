import { EventEmitter } from 'events'
import AppDispatcher from '../AppDispatcher'

let _gameboards = [];
//let _currplayer = 0;

class GameBoardsStore extends EventEmitter {
  constructor(props){
    super(props);

     AppDispatcher.register(action => {
      switch(action.actionType) {
        case 'RECEIVE_GAMEBOARDS':
          __gameboards = action.gameboards;
          this.emit('CHANGE');
          break;
        case 'RECEIVE_ONE_GAMEBOARD':
          __gameboards.push(action.gameboard);
          this.emit('CHANGE');
          break;
      }
    });
  }

  getAllGameBoards() {
    return _gameboards;
  }

  startListening(cb) {
    this.on('CHANGE', cb)
  }

  stopListening(cb) {
    this.removeListener('CHANGE', cb)
  }
}

export default new GameBoardStore();