import React from "react";
import ChatInput from "./components/ChatInput";
import Conversation from "./components/Conversation";
import { useDispatch } from 'react-redux';
import { SEND_MESSAGE } from "./redux/action-types";
import MessageFactory from "./factories/MessageFactory";


const App = () => {
  const dispatch = useDispatch();
  const sendMessage = (payload) => dispatch({type: SEND_MESSAGE, payload});
  MessageFactory.send('hi').then((resp) => {
    sendMessage({message: resp.data.fulfillmentText, timestamp: new Date(), type: 'bot'});
  }).catch(() => sendMessage({message: 'Looks like you have a connection problem' , timestamp: new Date(), type: 'error'}));
  return (
    <div className="main-wrapper">
        <Conversation />
        <ChatInput />
    </div>
  )
}

export default App;
