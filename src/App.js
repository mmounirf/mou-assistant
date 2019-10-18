import React from "react";
import ChatInput from "./components/ChatInput";
import Conversation from "./components/Conversation";
import { useDispatch } from 'react-redux';
import { SEND_MESSAGE } from "./redux/action-types";
import axios from 'axios';

const welcomeIntentReq = async () => {
  const welcomeIntentData = {
    "sessionId": "12345678",
    "queryInput": {
      "text": {
        "text": "hi",
        "languageCode": "en"
      }
    }
  }
  return axios.post(process.env.REACT_APP_DIALOGFLOW_GATEWAY, welcomeIntentData);
}
const App = () => {
  const dispatch = useDispatch();
  const sendMessage = (payload) => dispatch({type: SEND_MESSAGE, payload});
  welcomeIntentReq().then((resp) => {
    sendMessage({message: resp.data.fulfillmentText, timestamp: new Date(), type: 'bot'});
  });
  return (
    <div className="main-wrapper">
        <Conversation />
        <ChatInput />
    </div>
  )
}

export default App;
