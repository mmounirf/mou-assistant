import { SEND_MESSAGE, BUILD_LIST } from "./action-types";

const initialState = {
  messages: [],
  intentsList: [],
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
  if (action.type === BUILD_LIST) {
    return {
      ...state,
      intentsList: [...state.intentsList, action.payload]
    }
  }
  return state;
}

export default rootReducer;