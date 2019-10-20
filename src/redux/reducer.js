import { SEND_MESSAGE } from "./action-types";

const initialState = {
  messages: [],
  waitingBotReply: true,
}
const rootReducer = (state = initialState, action) => {
  if (action.type === SEND_MESSAGE) {
    return {
      ...state,
      messages: [...state.messages, action.payload],
      waitingBotReply: action.payload.type === 'human'
    }
  }
  return state;
}

export default rootReducer;