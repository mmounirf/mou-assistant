import { SEND_MESSAGE, BUILD_LIST } from "./action-types";

export const sendMessage = message => (
  {
    type: SEND_MESSAGE,
    payload: {
      message
    }
  }
)

export const buildList = option => (
  {
    type: BUILD_LIST,
    payload: {
      option
    }
  }
)