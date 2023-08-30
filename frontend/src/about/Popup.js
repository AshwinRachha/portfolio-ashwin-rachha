// Popup.js
import React, { useState } from 'react';
import axios from 'axios';

const Popup = () => {
    const [message, setMessage] = useState(''); // Message user types in
    const [response, setResponse] = useState(''); // Response from the backend

    const sendQuery = async () => {
        try {
            const result = await axios.post('http://127.0.0.1:8000/query', { query: message });
            setResponse(result.data.response);
        } catch (error) {
            setResponse('Error communicating with the server.');
        }
    };

    return (
        <div className="chatbox">
            <input 
                type="text" 
                value={message} 
                onChange={e => setMessage(e.target.value)} 
                className="chat-input"
                placeholder="Type your message..."
            />
            <button onClick={sendQuery} className="chat-send-btn">Send</button>
            <div className="response-box">
                {response}
            </div>
        </div>
    );
};

export default Popup;
