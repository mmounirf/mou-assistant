import { SEND_MESSAGE, SET_TOPICS } from "./action-types";

export const sendMessage = message => (
  {
    type: SEND_MESSAGE,
    payload: {
      message
    }
  }
)

export const setTopics = topics => (
  {
    type: SET_TOPICS,
    payload: topics
  }
)