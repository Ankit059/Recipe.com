import {searchRequest,searchSuccess, searchFailure } from '../actions/index';

export const performSearch = (val) => async (dispatch) => {
  dispatch(searchRequest());

  try {
    // Replace with your actual API endpoint
    const response = await fetch('http://localhost:3002/api/auth/searchrecipebyname',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        }, 
        body: JSON.stringify(encodeURIComponent(val)),
      });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    console.log(data)
    dispatch(searchSuccess(data));      
  } catch (error) {
    dispatch(searchFailure(error.message));
  }
};
