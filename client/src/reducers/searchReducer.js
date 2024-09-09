// reducers/searchReducer.js

import { SEARCH_REQUEST,SEARCH_SUCCESS, SEARCH_FAILURE } from '../actions/index';

const initialState = {
  data: []
};
 
const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_REQUEST:
      return {
        ...state
      };
    case SEARCH_SUCCESS:
      return {
        ...state,
        data: action.payload
      };
    case SEARCH_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};

export default searchReducer;
