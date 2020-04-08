import * as actionTypes from './actions';

const initialState = {
  counter: 0,
  results: []
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
    case actionTypes.STORE_RESULT:
      mutableState.results = state.results.concat({id: new Date(), value: state.counter});
      break;
    case actionTypes.DELETE_RESULT:
      // const id = action.resultID;
      // const newArray = [...state.results];
      // newArray.splice(id, 1);
      // mutableState.results = newArray;

      const updatedArray = state.results.filter(el => el.id !== action.resultID);
      mutableState.results = updatedArray;
      break;
    default:
      return mutableState
  }
  return mutableState;
}

export default reducer;