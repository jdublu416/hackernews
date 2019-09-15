import {
  GET_HEADLINES,
  SEARCH_HEADLINES,
  HEADLINE_ERROR
} from '../actions/types';

const initialState = {
  headlines: [],
  articles: [],
  error: {}
};
export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_HEADLINES:
      return {
        ...state,
        headlines: payload
      };
    case SEARCH_HEADLINES:
      return {
        ...state,
        headlines: payload
      };
    case HEADLINE_ERROR:
      return {
        ...state,
        error: payload
      };
    default:
      return state;
  }
};
