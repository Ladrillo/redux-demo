import { combineReducers } from 'redux';


function counter(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}

function currentPlayer(state = 'John', action) {
  switch (action.type) {
    case 'NEW_PLAYER':
      return action.payload;
    default:
      return state;
  }
}

function todos(state = ['laundry', 'study Redux'], action) {
  switch (action.type) {
    case 'ADD_TODO':
      return state.concat(action.payload);
    case 'DELETE_ONE':
      return state.filter((e, i) => i !== action.payload)
    default:
      return state;
  }
}

export default combineReducers({ counter, currentPlayer, todos });
