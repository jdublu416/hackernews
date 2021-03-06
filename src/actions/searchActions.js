import { GET_HEADLINES, SEARCH_HEADLINES, SAVE_SEARCH_INDEX, HEADLINE_ERROR } from './types';

export const getHeadlines = () => async dispatch => {
  try {
    const res = await fetch(
      'https://hn.algolia.com/api/v1/search?tags=front_page'
    );
    const data = await res.json();
    
    dispatch({
      type: GET_HEADLINES,
      payload: data.hits
    });
  } catch (err) {
    dispatch({
      type: HEADLINE_ERROR,
      payload: err.response.statusText
    });
  }
};

export const searchHeadlines = text => async dispatch => {
  try {
    const res = await fetch(
      `https://hn.algolia.com/api/v1/search?query=${text}&tags=story`
    );
    const data = await res.json();
   
    dispatch({
      type: SEARCH_HEADLINES,
      payload: data.hits
    });
  } catch (err) {
    dispatch({
      type: HEADLINE_ERROR,
      payload: err.response.statusText
    });
  }
};

export const saveUserSearch = text => async dispatch => {
  
  
  try {
    dispatch({
      type: SAVE_SEARCH_INDEX,
      payload: text
    })
  } catch (err) {
    dispatch({
      type: HEADLINE_ERROR,
      payload: err.response.statusText
    })
  }
}
