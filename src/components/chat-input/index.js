import React, { useState } from 'react'
import './index.css'
const ChatInput = () => {
    const [textInput, timeStamp, sendMessagex] = useState(0);
    const inputKeyDown = (e) => {
        if(e.keyCode === 13) {
            console.log(e.target.value)
        }
    }
    return (
        <input type="text" placeholder="Tell me something!" onKeyDown={inputKeyDown} />
    )
}

export default ChatInput;