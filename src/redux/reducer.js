import { SEND_MESSAGE } from "./action-types";

const initialState = {
  messages: []
};

const rootReducer = (state = initialState, action) => {
  if (action.type === SEND_MESSAGE) {
    return {
      ...state,
      messages: [...state.messages, action.payload]
    }
  }
  return state;
}

export default rootReducer;