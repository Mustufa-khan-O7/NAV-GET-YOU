function Chatbot({ onBack }) {
  return (
    <div className="feature-page">

      <button className="feature-back" onClick={onBack}>
        ← Back to Dashboard
      </button>

      <div className="feature-header">
        <span>🤖</span>

        <div>
          <h1>AI Campus Assistant</h1>
          <p>
            Ask anything about your campus, classes and student services.
          </p>
        </div>
      </div>

      <div className="chatbot-container">

        {/* Chat Header */}
        <div className="chat-header">
          <div className="bot-avatar">
            🤖
          </div>

          <div>
            <strong>NAV Assistant</strong>
            <span>● Online</span>
          </div>
        </div>

        {/* Messages */}
        <div className="chat-messages">

          <div className="message bot-message">
            <div className="message-avatar">🤖</div>

            <div className="message-content">
              <p>
                Hi! 👋 I'm your NAV GET YOU assistant.
              </p>

              <p>
                How can I help you today?
              </p>
            </div>
          </div>

          <div className="suggestions">

            <button>
              🧭 Find a classroom
            </button>

            <button>
              📅 Check timetable
            </button>

            <button>
              🚌 Bus information
            </button>

            <button>
              🎉 Upcoming events
            </button>

          </div>

        </div>

        {/* Input */}
        <div className="chat-input-area">

          <input
            type="text"
            placeholder="Ask NAV Assistant anything..."
          />

          <button className="send-btn">
            ➤
          </button>

        </div>

      </div>

    </div>
  );
}

export default Chatbot;