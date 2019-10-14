import React, { useState, useEffect } from 'react'
import './index.css'
const ChatInput = () => {
    const initialState = { message: '', timestamp: new Date() }
    const [{message, timestamp}, setMessage] = useState(initialState);

    const inputKeyDown = (e) => {
        if(e.keyCode === 13 && e.target.value.length) {
            e.preventDefault();
            setMessage({message: e.target.value, timestamp: new Date()});
            e.target.value = '';
        }
    }

    useEffect(() => {
        console.log(message, ' on ', timestamp)
    });

    return (
        <input type="text" placeholder="Tell me something!" onKeyDown={inputKeyDown} />
    )
}

export default ChatInput;