import * as actionTypes from '../actions';

const initialState = {
  results: [],
}

const reducer = (state = initialState, action) => {
  const mutableState = {...state };

  switch(action.type) {
    case actionTypes.STORE_RESULT:
      mutableState.results = state.results.concat({id: new Date(), value: action.result});
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