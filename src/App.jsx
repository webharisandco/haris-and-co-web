import './App.css';
import AppRouter from './routes/Router';
import ScrollToTop from './components/layout/ScrollTop';
import './Font.css';
import './Font/helvetica-neue-55.css';
// Import your ChatbotIcon (make sure correct path is used)

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <AppRouter />
      <div className="container">
        <div className="chatbot-popup">
          {/* chatbot header */}
          <div className="chat-header">
            <div className="header-info">
              {/* <Chat /> */}
              <h2 className="logo-text">Chatbot</h2>
            </div>
            <button className="material-symbols-rounded">
              keyboard_arrow_down
            </button>
          </div>

          {/* chatbot body */}
          <div className="chat-body">
            <div className="message bot-message">
              {/* <ChatbotIcon /> */}
              <p className="message-text">
                Hey there <br />How can I help you today?
              </p>
            </div>

            <div className="message user-message">
              <p className="message-text">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat
                minima molestiae reiciendis debitis magnam nesciunt ipsam qui
                minus, asperiores distinctio praesentium, commodi illo quod, aut
                veniam. Nemo maxime exercitationem molestias!
              </p>
            </div>
          </div>

          {/* chatbot footer */}
          <div className="chat-footer">
            <form action="#" className="chat-form">
              <input
                type="text"
                placeholder="message..."
                className="message-input"
                required
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
