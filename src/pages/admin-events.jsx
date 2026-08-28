import { useState } from "react";

function AdminEvents({ onBack }) {

  // ================= EVENTS DATA =================

  const [events, setEvents] = useState([
    {
      id: 1,
      title: "AI & Technology Workshop",
      date: "2026-08-28",
      time: "10:00 AM",
      location: "Seminar Hall",
      category: "Workshop",
      status: "Upcoming",
    },
    {
      id: 2,
      title: "Sports Day",
      date: "2026-09-02",
      time: "09:00 AM",
      location: "College Ground",
      category: "Sports",
      status: "Upcoming",
    },
    {
      id: 3,
      title: "Tech Fest 2026",
      date: "2026-09-10",
      time: "11:00 AM",
      location: "Main Auditorium",
      category: "Technology",
      status: "Upcoming",
    },
  ]);


  // ================= STATES =================

  const [search, setSearch] = useState("");

  const [showForm, setShowForm] = useState(false);

  const [editingEvent, setEditingEvent] = useState(null);


  const [formData, setFormData] = useState({
    title: "",
    date: "",
    time: "",
    location: "",
    category: "Workshop",
    status: "Upcoming",
  });


  // ================= SEARCH =================

  const filteredEvents = events.filter((event) => {

    const searchText =
      `${event.title} ${event.location} ${event.category}`
        .toLowerCase();

    return searchText.includes(
      search.toLowerCase()
    );

  });


  // ================= INPUT CHANGE =================

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };


  // ================= ADD EVENT =================

  const addEvent = (e) => {

    e.preventDefault();

    const newEvent = {
      ...formData,
      id: Date.now(),
    };

    setEvents([
      ...events,
      newEvent,
    ]);

    closeForm();

  };


  // ================= DELETE EVENT =================

  const deleteEvent = (id) => {

    const confirmDelete = window.confirm(
      "Are you sure you want to delete this event?"
    );

    if (!confirmDelete) return;

    setEvents(
      events.filter(
        (event) => event.id !== id
      )
    );

  };


  // ================= EDIT EVENT =================

  const editEvent = (event) => {

    setEditingEvent(event);

    setFormData({
      title: event.title,
      date: event.date,
      time: event.time,
      location: event.location,
      category: event.category,
      status: event.status,
    });

    setShowForm(true);

  };


  // ================= UPDATE EVENT =================

  const updateEvent = (e) => {

    e.preventDefault();

    setEvents(
      events.map((event) => {

        if (event.id === editingEvent.id) {

          return {
            ...formData,
            id: event.id,
          };

        }

        return event;

      })
    );

    closeForm();

  };


  // ================= CLOSE FORM =================

  const closeForm = () => {

    setShowForm(false);

    setEditingEvent(null);

    setFormData({
      title: "",
      date: "",
      time: "",
      location: "",
      category: "Workshop",
      status: "Upcoming",
    });

  };


  // ================= FORM SUBMIT =================

  const handleSubmit = (e) => {

    if (editingEvent) {

      updateEvent(e);

    } else {

      addEvent(e);

    }

  };


  // ================= UI =================

  return (

    <div className="admin-events-page">

      {/* ================= HEADER ================= */}

      <div className="events-page-header">

        <button
          className="events-back-btn"
          onClick={onBack}
        >
          ←
        </button>

        <div>

          <h1>Events Management</h1>

          <p>
            Create and manage campus events
          </p>

        </div>

      </div>


      {/* ================= TOOLBAR ================= */}

      <div className="events-toolbar">

        <div className="events-search">

          <span>🔍</span>

          <input
            type="text"
            placeholder="Search events..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
          />

        </div>


        <button
          className="add-event-btn"
          onClick={() => {
            setEditingEvent(null);
            setShowForm(true);
          }}
        >
          + Add Event
        </button>

      </div>


      {/* ================= EVENTS LIST ================= */}

      <div className="events-list">

        {filteredEvents.length > 0 ? (

          filteredEvents.map((event) => (

            <div
              className="event-management-card"
              key={event.id}
            >

              {/* Date */}

              <div className="management-event-date">

                <strong>
                  {new Date(event.date).getDate()}
                </strong>

                <span>
                  {new Date(event.date)
                    .toLocaleString("en-US", {
                      month: "short",
                    })
                    .toUpperCase()}
                </span>

              </div>


              {/* Event Information */}

              <div className="management-event-info">

                <h2>
                  {event.title}
                </h2>

                <div className="event-details">

                  <span>
                    🕐 {event.time}
                  </span>

                  <span>
                    📍 {event.location}
                  </span>

                  <span>
                    🏷️ {event.category}
                  </span>

                </div>

              </div>


              {/* Status */}

              <div
                className={`event-status ${
                  event.status === "Upcoming"
                    ? "upcoming"
                    : event.status === "Completed"
                    ? "completed"
                    : "cancelled"
                }`}
              >
                {event.status}
              </div>


              {/* Actions */}

              <div className="event-management-actions">

                <button
                  onClick={() =>
                    editEvent(event)
                  }
                  title="Edit Event"
                >
                  ✏️
                </button>

                <button
                  onClick={() =>
                    deleteEvent(event.id)
                  }
                  title="Delete Event"
                >
                  🗑️
                </button>

              </div>

            </div>

          ))

        ) : (

          <div className="no-events">

            <h2>No Events Found</h2>

            <p>
              Try searching with another keyword.
            </p>

          </div>

        )}

      </div>


      {/* ================= ADD / EDIT MODAL ================= */}

      {showForm && (

        <div className="event-modal-overlay">

          <div className="event-modal">

            {/* Modal Header */}

            <div className="event-modal-header">

              <div>

                <h2>
                  {editingEvent
                    ? "Edit Event"
                    : "Add New Event"}
                </h2>

                <p>
                  Enter event information
                </p>

              </div>


              <button
                className="close-event-modal"
                onClick={closeForm}
              >
                ×
              </button>

            </div>


            {/* Form */}

            <form onSubmit={handleSubmit}>

              <div className="event-form-grid">


                {/* Event Title */}

                <div className="event-form-group">

                  <label>
                    Event Title
                  </label>

                  <input
                    type="text"
                    name="title"
                    placeholder="Enter event title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                  />

                </div>


                {/* Location */}

                <div className="event-form-group">

                  <label>
                    Location
                  </label>

                  <input
                    type="text"
                    name="location"
                    placeholder="Enter location"
                    value={formData.location}
                    onChange={handleChange}
                    required
                  />

                </div>


                {/* Date */}

                <div className="event-form-group">

                  <label>
                    Date
                  </label>

                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                  />

                </div>


                {/* Time */}

                <div className="event-form-group">

                  <label>
                    Time
                  </label>

                  <input
                    type="text"
                    name="time"
                    placeholder="10:00 AM"
                    value={formData.time}
                    onChange={handleChange}
                    required
                  />

                </div>


                {/* Category */}

                <div className="event-form-group">

                  <label>
                    Category
                  </label>

                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                  >

                    <option>Workshop</option>
                    <option>Sports</option>
                    <option>Technology</option>
                    <option>Cultural</option>
                    <option>Academic</option>
                    <option>Other</option>

                  </select>

                </div>


                {/* Status */}

                <div className="event-form-group">

                  <label>
                    Status
                  </label>

                  <select
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                  >

                    <option>Upcoming</option>
                    <option>Completed</option>
                    <option>Cancelled</option>

                  </select>

                </div>

              </div>


              {/* Form Buttons */}

              <div className="event-form-actions">

                <button
                  type="button"
                  className="cancel-event-btn"
                  onClick={closeForm}
                >
                  Cancel
                </button>


                <button
                  type="submit"
                  className="save-event-btn"
                >
                  {editingEvent
                    ? "Update Event"
                    : "Create Event"}
                </button>

              </div>

            </form>

          </div>

        </div>

      )}

    </div>

  );
}

export default AdminEvents;