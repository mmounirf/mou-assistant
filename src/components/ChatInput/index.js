import React from "react";
import "./index.css";
import { useDispatch } from "react-redux";
import { SEND_MESSAGE, SET_TOPICS } from "../../redux/action-types";
import MessageFactory from "../../factories/MessageFactory";
const ChatInput = () => {
  const dispatch = useDispatch();
  const sendMessage = payload => dispatch({ type: SEND_MESSAGE, payload });
  const setTopics = payload => dispatch({ type: SET_TOPICS, payload });

  const inputKeyDown = e => {
    if (e.keyCode === 13 && e.target.value.length) {
      e.preventDefault();
      sendMessage({ message: e.target.value, timestamp: new Date(), type: "human" });
      MessageFactory.send(e.target.value).then(resp => {
        const customPayload = resp.data.fulfillmentMessages.filter(messages => messages.message === 'payload');
        const hasCustomPayload = customPayload.length > 0;
        if(hasCustomPayload) {
          const customPayloadData = customPayload[0].payload.fields.intents.listValue.values.map(topic => {
            return {
              'title': topic.structValue.fields.title.stringValue,
              'question': topic.structValue.fields.queston.stringValue
            }
          });
          console.log(customPayloadData)
          setTopics(customPayloadData);
        }
        sendMessage({ message: resp.data.fulfillmentText, timestamp: new Date(), type: "bot" });
      });
      e.target.value = "";
    }
  };

  return <input type="text" placeholder="Tell me something!" onKeyDown={inputKeyDown} />;
};

export default ChatInput;
