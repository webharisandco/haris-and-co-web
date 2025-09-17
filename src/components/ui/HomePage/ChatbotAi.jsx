import React, { useState } from 'react';

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { from: 'bot', text: 'Hello! How can I help you today?' }
  ]);
  const [userInput, setUserInput] = useState('');
  const [chatOpen, setChatOpen] = useState(false);

  const getBotResponse = (input) => {
    const text = input.toLowerCase();
    if (text.includes('hello')) return 'Hi there!';
    if (text.includes('time')) return 'Sorry, I cannot tell time yet.';
    if (text.includes('help')) return 'Sure! What do you need help with?';
    return "I'm not sure how to help with that.";
  };

  const handleSend = () => {
    if (!userInput.trim()) return;
    const newMessages = [...messages, { from: 'user', text: userInput }];
    setMessages(newMessages);
    setUserInput('');
    setTimeout(() => {
      const botReply = getBotResponse(userInput);
      setMessages(prev => [...prev, { from: 'bot', text: botReply }]);
    }, 1000);
  };

  return (
    <>
      
      <button
        onClick={() => setChatOpen(!chatOpen)}
        className="fixed right-4 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg z-50"
        aria-label="Open chat"
      >
        
        <span className="text-xl font-bold">💬</span>
      </button>

      {/* Chat window slides from right */}
      <div
        className={`fixed top-20 right-4 bg-white border border-gray-300 rounded-lg shadow-lg flex flex-col w-80 h-96 z-40 transition-transform duration-300 ${
          chatOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex-grow p-4 overflow-y-auto">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`mb-3 p-2 rounded ${
                msg.from === 'bot'
                  ? 'bg-gray-200 text-black text-left'
                  : 'bg-blue-600 text-white text-right'
              }`}
            >
              {msg.text}
            </div>
          ))}
        </div>

        <div className="flex p-4 border-t border-gray-300">
          <input
            type="text"
            className="flex-grow border rounded-l px-3 py-2 focus:outline-none"
            placeholder="Type your message..."
            value={userInput}
            onChange={e => setUserInput(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && handleSend()}
          />
          <button
            onClick={handleSend}
            className="bg-blue-600 text-white rounded-r px-4 py-2"
          >
            Send
          </button>
        </div>
      </div>
    </>
  );
};

export default Chatbot;
