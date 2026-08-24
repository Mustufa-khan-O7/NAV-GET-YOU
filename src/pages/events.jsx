function Events({ onBack }) {
  const events = [
    {
      date: "28",
      month: "AUG",
      title: "AI & Technology Workshop",
      category: "Workshop",
      time: "10:00 AM - 01:00 PM",
      venue: "Seminar Hall",
      icon: "🤖",
    },
    {
      date: "02",
      month: "SEP",
      title: "Campus Hackathon 2026",
      category: "Hackathon",
      time: "09:00 AM - 05:00 PM",
      venue: "Innovation Lab",
      icon: "💻",
    },
    {
      date: "08",
      month: "SEP",
      title: "Entrepreneurship Seminar",
      category: "Seminar",
      time: "11:00 AM - 01:00 PM",
      venue: "Auditorium",
      icon: "🚀",
    },
    {
      date: "15",
      month: "SEP",
      title: "Annual Sports Meet",
      category: "Sports",
      time: "08:00 AM - 04:00 PM",
      venue: "College Ground",
      icon: "🏆",
    },
  ];

  return (
    <div className="feature-page">

      {/* Back */}
<button
  className="feature-back"
  onClick={onBack}
  title="←"
  aria-label="←"
>
  ←
</button>
      {/* Header */}
      <div className="feature-header">

        <span>🎉</span>

        <div>
          <h1>Campus Events</h1>

          <p>
            Discover upcoming events and activities on campus.
          </p>
        </div>

      </div>

      {/* Events */}
      <div className="events-grid">

        {events.map((event, index) => (

          <div
            className="event-card"
            key={index}
          >

            {/* Date */}
            <div className="event-date">

              <strong>
                {event.date}
              </strong>

              <span>
                {event.month}
              </span>

            </div>

            {/* Icon */}
            <div className="event-icon">
              {event.icon}
            </div>

            {/* Content */}
            <div className="event-content">

              <span className="event-category">
                {event.category}
              </span>

              <h2>
                {event.title}
              </h2>

              <div className="event-info">
                🕐 {event.time}
              </div>

              <div className="event-info">
                📍 {event.venue}
              </div>

            </div>

            {/* Button */}
            <button className="event-btn">
              View Details →
            </button>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Events;




