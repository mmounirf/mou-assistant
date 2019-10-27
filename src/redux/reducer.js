import { SEND_MESSAGE, SET_TOPICS } from "./action-types";

const initialState = {
  messages: [],
  topics: [],
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
  if (action.type === SET_TOPICS) {
    return {
      ...state,
      topics: [...state.topics, ...action.payload]
    }
  }
  return state;
}

export default rootReducer;