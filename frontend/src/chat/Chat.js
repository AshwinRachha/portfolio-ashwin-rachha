import React, { useState } from 'react';
import axios from 'axios';

function Chat() {
    const [messages, setMessages] = useState([]);
    const [currentMessage, setCurrentMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        setMessages([...messages, { type: 'user', content: currentMessage }]);

        try {
            const response = await axios.post('http://localhost:8000/generate-text/', { query: currentMessage });
            setMessages(prevMessages => [...prevMessages, { type: 'bot', content: response.data.response }]);
        } catch (error) {
            console.error("Error while querying:", error);
        }

        setCurrentMessage('');
    };

    return (
        <div>
            <div>
                {messages.map((message, idx) => (
                    <div key={idx} className={message.type}>
                        {message.content}
                    </div>
                ))}
            </div>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    value={currentMessage}
                    onChange={(e) => setCurrentMessage(e.target.value)}
                    placeholder="Ask something..."
                />
                <button type="submit">Send</button>
            </form>
        </div>
    );
}

export default Chat;
