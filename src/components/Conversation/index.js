import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Message from "../Message";
import "./index.css";
import MessageLoading from "../MessageLoading";
import MessageFactory from "../../factories/MessageFactory";
import ChipList from "../ChipList";

const Conversation = () => {
  const messages = useSelector(state => state.messages);
  const isLoading = useSelector(state => state.waitingBotReply);
  const chipList = useSelector(state => state.topics);
  const showLoadingMessage = () => {
    if (isLoading) {
      return <MessageLoading />;
    }
  };
  const buildTopicsList = () => {
    if (chipList.length > 0) {
      return (
        <ChipList chips={chipList} />
      )
    }
  };
  useEffect(() => {
    MessageFactory.scrollToBottom();
  });
  return (
    <div className="conversation">
      {messages.map((item, i) => {
        return (
          <Message key={i}>
            <p className={item.type}>{item.message}</p>
          </Message>
        );
      })}
      {showLoadingMessage()}
      {buildTopicsList()}
    </div>
  );
};

export default Conversation;
