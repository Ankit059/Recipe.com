export const SEARCH_REQUEST = 'SEARCH_REQUEST';
export const SEARCH_SUCCESS = 'SEARCH_SUCCESS';
export const SEARCH_FAILURE = 'SEARCH_FAILURE';
 
export const searchRequest = () => ({
    type: SEARCH_REQUEST,
  });

export const searchSuccess = (data) => ({
    type: SEARCH_SUCCESS,
    payload: data,
  });
  
  export const searchFailure = (error) => ({
    type: SEARCH_FAILURE,
    payload: error,
  });