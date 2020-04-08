import * as actionTypes from './actionTypes';

const saveResult = (result) => {

  return {
    type: actionTypes.STORE_RESULT,
    result: result,
  };
}

export const storeResult = (result) => {
  return (dispatch, getState) => {
    setTimeout(() => {
      const oldCounter = getState().ctr.counter;
      console.log(getState(), oldCounter)
      dispatch(saveResult(result))
    }, 2000);
  }
};
export const deleteResult = (resultID) => {
  return {
    type: actionTypes.DELETE_RESULT,
    resultID: resultID
  };
};