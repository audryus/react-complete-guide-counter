import * as actionTypes from '../actions';

const initialState = {
  counter: 0,
}

const reducer = (state = initialState, action) => {
  const mutableState = {...state };

  switch(action.type) {
    case(actionTypes.INCREMENT):
      mutableState.counter = state.counter + 1;
      break;
    case(actionTypes.DECREMENT):
    mutableState.counter = state.counter - 1;
      break;
    case(actionTypes.ADD):
      mutableState.counter = state.counter + action.value;
      break;
    case(actionTypes.SUBTRACT):
      mutableState.counter = state.counter - action.value
      break;
    default:
      return mutableState
  }
  return mutableState;
}

export default reducer;