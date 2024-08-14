import React, { useState } from 'react';

const Dialouge = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: 'user' }]);
      setInput('');
      
      // Simulate a response
      setTimeout(() => {
        setMessages([...messages, { text: input, sender: 'user' }, { text: 'Response from bot', sender: 'bot' }]);
      }, 1000);
    }
  };

  const dialogueStyles = {
    container: {
      width: '300px',
      border: '1px solid #ccc',
      padding: '10px',
      borderRadius: '5px',
      background: '#f9f9f9',
      fontFamily: 'Arial, sans-serif',
    },
    messages: {
      height: '200px',
      overflowY: 'scroll',
      marginBottom: '10px',
      paddingRight: '10px',
    },
    message: {
      padding: '5px',
      margin: '5px',
      borderRadius: '5px',
    },
    userMessage: {
      textAlign: 'right',
      background: '#e1f5fe',
    },
    botMessage: {
      textAlign: 'left',
      background: '#e8f5e9',
    },
    inputForm: {
      display: 'flex',
    },
    input: {
      flex: '1',
      padding: '5px',
      border: '1px solid #ccc',
      borderRadius: '5px 0 0 5px',
    },
    button: {
      padding: '5px',
      border: '1px solid #ccc',
      borderRadius: '0 5px 5px 0',
      cursor: 'pointer',
      background: '#007bff',
      color: 'white',
    },
  };

  return (
    <div style={dialogueStyles.container}>
      <div style={dialogueStyles.messages}>
        {messages.map((msg, index) => (
          <div
            key={index}
            style={{
              ...dialogueStyles.message,
              ...(msg.sender === 'user' ? dialogueStyles.userMessage : dialogueStyles.botMessage),
            }}
          >
            {msg.text}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} style={dialogueStyles.inputForm}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
          style={dialogueStyles.input}
        />
        <button type="submit" style={dialogueStyles.button}>
          Send
        </button>
      </form>
    </div>
  );
};

export default Dialouge;
