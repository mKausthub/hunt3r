import { CREATE_MESSAGE } from "../actionTypes";

const initialState = {
  msg: ''
};

export default function(state = initialState, action) {
  switch (action.type) {
    case CREATE_MESSAGE:
      return {
        ...state,
        msg: action.payload
      }
    default:
      return state;
  }
}
