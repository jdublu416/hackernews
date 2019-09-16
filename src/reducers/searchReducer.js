import {
  GET_HEADLINES,
  SEARCH_HEADLINES,
  SAVE_SEARCH_INDEX,
  HEADLINE_ERROR
} from '../actions/types';

const initialState = {
  headlines: [],
  topics: [],
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
    case SAVE_SEARCH_INDEX:
      return {
        ...state,
        topics: [payload, ...state.topics]
      };

    default:
      return state;
  }
};
