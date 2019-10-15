import React from "react";
import ChatInput from "./components/ChatInput";
import Conversation from "./components/Conversation";


const App = () => {
  return (
    <div className="main-wrapper">
        <Conversation />
        <ChatInput />
    </div>
  )
}

export default App;
