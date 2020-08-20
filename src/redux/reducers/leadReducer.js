import { GET_LEADS, START_LOADING } from '../actionTypes';

const initialState = {
  leads: [],
  loading: false,
  pageStatus: true
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_LEADS: {
      return {
        ...state,
        leads: action.payload,
        loading: false
      };
    }
    case START_LOADING: {
      return {
        ...state,
        loading: true
      };
    }
    default:
      return state;
  }
}
