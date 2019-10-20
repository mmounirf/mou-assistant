import React from "react";
import "./index.css";
import { useDispatch } from "react-redux";
import { SEND_MESSAGE } from "../../redux/action-types";
import MessageFactory from "../../factories/MessageFactory";
const ChatInput = () => {
  const dispatch = useDispatch();
  const sendMessage = payload => dispatch({ type: SEND_MESSAGE, payload });
  const inputKeyDown = e => {
    if (e.keyCode === 13 && e.target.value.length) {
      e.preventDefault();
      sendMessage({ message: e.target.value, timestamp: new Date(), type: "human" });
      MessageFactory.send(e.target.value).then(resp => {
        sendMessage({ message: resp.data.fulfillmentText, timestamp: new Date(), type: "bot" });
      });
      e.target.value = "";
    }
  };

  return <input type="text" placeholder="Tell me something!" onKeyDown={inputKeyDown} />;
};

export default ChatInput;
