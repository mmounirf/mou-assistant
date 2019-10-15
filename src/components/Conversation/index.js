import React from "react";
import { useSelector } from 'react-redux';

import Message from "../Message";
const Conversation = () => {
  const messages = useSelector(state => state.messages);
  return (
    <div>
    {messages.map((message, i) => {
      return (
        <Message key={i}>
          <p>{message.message}</p>
        </Message>
      );
    })}
  </div>
  )
}

export default Conversation;

