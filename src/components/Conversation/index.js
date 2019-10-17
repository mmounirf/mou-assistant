import React from "react";
import { useSelector } from 'react-redux';
import Message from "../Message";
import './index.css';

const Conversation = () => {
  const messages = useSelector(state => state.messages);
  return (
    <div className="conversation">
    {messages.map((item, i) => {
      return (
        <Message key={i}>
          <div className={item.type}>
            <p className="message">{item.message}</p>
          </div>
        </Message>
      );
    })}
  </div>
  )
}

export default Conversation;

