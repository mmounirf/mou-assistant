import React, { useEffect } from "react";
import { useSelector } from 'react-redux';
import Message from "../Message";
import './index.css';
import MessageLoading from "../MessageLoading";
import MessageFactory from "../../factories/MessageFactory";

const Conversation = () => {
  const messages = useSelector(state => state.messages);
  const isLoading = useSelector(state => state.waitingBotReply);
  const showLoadingMessage = () => {
    if(isLoading) {
      return <MessageLoading />
    }
  }
  useEffect(() => {
    MessageFactory.scrollToBottom();
  });
  return (
    <div className="conversation">
    {
      messages.map((item, i) => {
        return (
          <Message key={i}>
            <p className={item.type}>
              {item.message}
            </p>
          </Message>
        );
      })
    }
    {showLoadingMessage()}
  </div>
  )
}

export default Conversation;

