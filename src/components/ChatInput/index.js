import React from "react";
import "./index.css";
import { useDispatch } from "react-redux";
import { SEND_MESSAGE, BUILD_LIST } from "../../redux/action-types";
import MessageFactory from "../../factories/MessageFactory";
const ChatInput = () => {
  const dispatch = useDispatch();
  const sendMessage = payload => dispatch({ type: SEND_MESSAGE, payload });
  const buildIntentsList = payload => dispatch({ type: BUILD_LIST, payload });

  const inputKeyDown = e => {
    if (e.keyCode === 13 && e.target.value.length) {
      e.preventDefault();
      sendMessage({ message: e.target.value, timestamp: new Date(), type: "human" });
      MessageFactory.send(e.target.value).then(resp => {
        const customPayload = resp.data.fulfillmentMessages.filter(messages => messages.message === 'payload');
        const hasCustomPayload = customPayload.length > 0;
        if(hasCustomPayload) {
          const customPayloadMessages = customPayload[0].payload.fields.intents.listValue.values.map(message => message.stringValue);
          buildIntentsList([...customPayloadMessages]);
        }
        sendMessage({ message: resp.data.fulfillmentText, timestamp: new Date(), type: "bot" });
      });
      e.target.value = "";
    }
  };

  return <input type="text" placeholder="Tell me something!" onKeyDown={inputKeyDown} />;
};

export default ChatInput;
