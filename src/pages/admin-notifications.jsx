import { useState } from "react";

function AdminNotifications({ onBack }) {

  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");

  const [showAddForm, setShowAddForm] = useState(false);
  const [selectedNotification, setSelectedNotification] = useState(null);

  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: "Timetable Updated",
      message:
        "The BCA AI-DA timetable has been updated. Students are requested to check the latest schedule.",
      type: "Academic",
      target: "BCA AI-DA",
      date: "28 Aug 2026",
      time: "10:30 AM",
      status: "Sent",
    },
    {
      id: 2,
      title: "Sports Day Registration",
      message:
        "Registration for Sports Day 2026 is now open. Interested students can register through the student portal.",
      type: "Event",
      target: "All Students",
      date: "27 Aug 2026",
      time: "02:15 PM",
      status: "Sent",
    },
    {
      id: 3,
      title: "Bus Route Change",
      message:
        "Bus Route BUS-03 will follow a modified route today due to road maintenance.",
      type: "Transport",
      target: "All Students",
      date: "27 Aug 2026",
      time: "08:00 AM",
      status: "Sent",
    },
    {
      id: 4,
      title: "Library Timing",
      message:
        "The library will remain open until 8:00 PM during the examination preparation period.",
      type: "General",
      target: "All Students",
      date: "26 Aug 2026",
      time: "04:00 PM",
      status: "Scheduled",
    },
  ]);


  /* =========================
     STATISTICS
  ========================= */

  const totalNotifications = notifications.length;

  const sentNotifications = notifications.filter(
    (notification) =>
      notification.status === "Sent"
  ).length;

  const scheduledNotifications = notifications.filter(
    (notification) =>
      notification.status === "Scheduled"
  ).length;


  /* =========================
     SEARCH + FILTER
  ========================= */

  const filteredNotifications =
    notifications.filter((notification) => {

      const searchText =
        search.toLowerCase();

      const matchesSearch =
        notification.title
          .toLowerCase()
          .includes(searchText) ||

        notification.message
          .toLowerCase()
          .includes(searchText) ||

        notification.target
          .toLowerCase()
          .includes(searchText);


      const matchesType =
        typeFilter === "All" ||
        notification.type === typeFilter;


      const matchesStatus =
        statusFilter === "All" ||
        notification.status === statusFilter;


      return (
        matchesSearch &&
        matchesType &&
        matchesStatus
      );
    });


  /* =========================
     DELETE
  ========================= */

  const deleteNotification = (id) => {

    const confirmDelete =
      window.confirm(
        "Are you sure you want to delete this notification?"
      );

    if (!confirmDelete) return;

    setNotifications(
      notifications.filter(
        (notification) =>
          notification.id !== id
      )
    );
  };


  /* =========================
     ADD NOTIFICATION
  ========================= */

  const handleAddNotification = (e) => {

    e.preventDefault();

    const form = e.target;

    const newNotification = {

      id: Date.now(),

      title:
        form.title.value,

      message:
        form.message.value,

      type:
        form.type.value,

      target:
        form.target.value,

      date:
        form.date.value,

      time:
        form.time.value,

      status:
        form.status.value,
    };


    setNotifications([
      newNotification,
      ...notifications,
    ]);

    setShowAddForm(false);

    form.reset();
  };


  return (

    <div className="admin-notifications-page">


      {/* =========================
          HEADER
      ========================= */}

      <div className="notification-page-header">

        <button
          className="notification-back-btn"
          onClick={onBack}
        >
          ←
        </button>

        <div>

          <h1>
            Notifications Management
          </h1>

          <p>
            Send and manage campus notifications
          </p>

        </div>

      </div>


      {/* =========================
          STATS
      ========================= */}

      <div className="notification-stats">

        <div className="notification-stat-card">

          <div className="notification-stat-icon">
            🔔
          </div>

          <div>

            <span>
              Total Notifications
            </span>

            <strong>
              {totalNotifications}
            </strong>

          </div>

        </div>


        <div className="notification-stat-card">

          <div className="notification-stat-icon">
            🟢
          </div>

          <div>

            <span>
              Sent
            </span>

            <strong>
              {sentNotifications}
            </strong>

          </div>

        </div>


        <div className="notification-stat-card">

          <div className="notification-stat-icon">
            🟡
          </div>

          <div>

            <span>
              Scheduled
            </span>

            <strong>
              {scheduledNotifications}
            </strong>

          </div>

        </div>


        <div className="notification-stat-card">

          <div className="notification-stat-icon">
            👥
          </div>

          <div>

            <span>
              Target Audience
            </span>

            <strong>
              All Students
            </strong>

          </div>

        </div>

      </div>


      {/* =========================
          TOOLBAR
      ========================= */}

      <div className="notification-toolbar">


        {/* SEARCH */}

        <div className="notification-search">

          <span>
            🔍
          </span>

          <input
            type="text"
            placeholder="Search notifications..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
          />

        </div>


        {/* TYPE */}

        <select
          className="notification-filter"
          value={typeFilter}
          onChange={(e) =>
            setTypeFilter(e.target.value)
          }
        >

          <option value="All">
            All Types
          </option>

          <option value="Academic">
            Academic
          </option>

          <option value="Event">
            Event
          </option>

          <option value="Transport">
            Transport
          </option>

          <option value="General">
            General
          </option>

        </select>


        {/* STATUS */}

        <select
          className="notification-filter"
          value={statusFilter}
          onChange={(e) =>
            setStatusFilter(e.target.value)
          }
        >

          <option value="All">
            All Status
          </option>

          <option value="Sent">
            Sent
          </option>

          <option value="Scheduled">
            Scheduled
          </option>

        </select>


        {/* ADD */}

        <button
          className="send-notification-btn"
          onClick={() =>
            setShowAddForm(true)
          }
        >
          + Send Notification
        </button>

      </div>


      {/* =========================
          NOTIFICATION LIST
      ========================= */}

      <div className="notification-list">


        {filteredNotifications.length === 0 ? (

          <div className="no-notifications">

            <div>
              🔔
            </div>

            <h2>
              No notifications found
            </h2>

            <p>
              Try changing your search or filters.
            </p>

          </div>

        ) : (

          filteredNotifications.map(
            (notification) => (

              <div
                className="notification-card"
                key={notification.id}
              >


                {/* ICON */}

                <div className="notification-icon">
                  🔔
                </div>


                {/* MAIN */}

                <div className="notification-main">

                  <div className="notification-title-row">

                    <span className="notification-type">
                      {notification.type}
                    </span>

                    <span
                      className={`notification-status ${
                        notification.status ===
                        "Sent"
                          ? "notification-sent"
                          : "notification-scheduled"
                      }`}
                    >
                      {notification.status}
                    </span>

                  </div>


                  <h2>
                    {notification.title}
                  </h2>


                  <p>
                    {notification.message}
                  </p>


                  <div className="notification-meta">

                    <span>
                      👥 {notification.target}
                    </span>

                    <span>
                      📅 {notification.date}
                    </span>

                    <span>
                      🕐 {notification.time}
                    </span>

                  </div>

                </div>


                {/* ACTIONS */}

                <div className="notification-actions">

                  <button
                    className="view-notification-btn"
                    onClick={() =>
                      setSelectedNotification(
                        notification
                      )
                    }
                  >
                    View
                  </button>


                  <button
                    className="delete-notification-btn"
                    onClick={() =>
                      deleteNotification(
                        notification.id
                      )
                    }
                  >
                    🗑
                  </button>

                </div>

              </div>

            )
          )

        )}

      </div>


      {/* =================================================
          VIEW NOTIFICATION MODAL
      ================================================= */}

      {selectedNotification && (

        <div className="notification-modal-overlay">

          <div className="notification-modal">


            <div className="notification-modal-header">

              <div>

                <span>
                  {selectedNotification.type}
                </span>

                <h2>
                  {selectedNotification.title}
                </h2>

              </div>


              <button
                className="close-notification-modal"
                onClick={() =>
                  setSelectedNotification(null)
                }
              >
                ×
              </button>

            </div>


            <div className="notification-detail-grid">

              <div>

                <label>
                  Target Audience
                </label>

                <strong>
                  {selectedNotification.target}
                </strong>

              </div>


              <div>

                <label>
                  Date
                </label>

                <strong>
                  {selectedNotification.date}
                </strong>

              </div>


              <div>

                <label>
                  Time
                </label>

                <strong>
                  {selectedNotification.time}
                </strong>

              </div>


              <div>

                <label>
                  Status
                </label>

                <strong>
                  {selectedNotification.status}
                </strong>

              </div>

            </div>


            <div className="notification-message-box">

              <label>
                Message
              </label>

              <p>
                {selectedNotification.message}
              </p>

            </div>


            <div className="notification-modal-actions">

              <button
                className="notification-modal-close"
                onClick={() =>
                  setSelectedNotification(null)
                }
              >
                Close
              </button>

            </div>

          </div>

        </div>

      )}


      {/* =================================================
          ADD NOTIFICATION MODAL
      ================================================= */}

      {showAddForm && (

        <div className="notification-modal-overlay">

          <div className="notification-modal">


            <div className="notification-modal-header">

              <div>

                <span>
                  ADMIN
                </span>

                <h2>
                  Send Notification
                </h2>

              </div>


              <button
                className="close-notification-modal"
                onClick={() =>
                  setShowAddForm(false)
                }
              >
                ×
              </button>

            </div>


            <form
              onSubmit={handleAddNotification}
            >

              <div className="notification-form-grid">


                {/* TITLE */}

                <div className="notification-form-group full">

                  <label>
                    Notification Title
                  </label>

                  <input
                    name="title"
                    placeholder="Enter notification title"
                    required
                  />

                </div>


                {/* TYPE */}

                <div className="notification-form-group">

                  <label>
                    Notification Type
                  </label>

                  <select
                    name="type"
                    defaultValue="General"
                  >

                    <option value="General">
                      General
                    </option>

                    <option value="Academic">
                      Academic
                    </option>

                    <option value="Event">
                      Event
                    </option>

                    <option value="Transport">
                      Transport
                    </option>

                  </select>

                </div>


                {/* TARGET */}

                <div className="notification-form-group">

                  <label>
                    Target Audience
                  </label>

                  <select
                    name="target"
                    defaultValue="All Students"
                  >

                    <option value="All Students">
                      All Students
                    </option>

                    <option value="BCA AI-DA">
                      BCA AI-DA
                    </option>

                    <option value="BCA">
                      BCA
                    </option>

                    <option value="BBA">
                      BBA
                    </option>

                    <option value="BCA Section A">
                      BCA Section A
                    </option>

                    <option value="BCA Section B">
                      BCA Section B
                    </option>

                  </select>

                </div>


                {/* DATE */}

                <div className="notification-form-group">

                  <label>
                    Date
                  </label>

                  <input
                    name="date"
                    type="date"
                    required
                  />

                </div>


                {/* TIME */}

                <div className="notification-form-group">

                  <label>
                    Time
                  </label>

                  <input
                    name="time"
                    type="time"
                    required
                  />

                </div>


                {/* STATUS */}

                <div className="notification-form-group">

                  <label>
                    Status
                  </label>

                  <select
                    name="status"
                    defaultValue="Sent"
                  >

                    <option value="Sent">
                      Send Now
                    </option>

                    <option value="Scheduled">
                      Schedule
                    </option>

                  </select>

                </div>


                {/* MESSAGE */}

                <div className="notification-form-group full">

                  <label>
                    Message
                  </label>

                  <textarea
                    name="message"
                    rows="5"
                    placeholder="Write your notification message..."
                    required
                  />

                </div>

              </div>


              {/* ACTIONS */}

              <div className="notification-modal-actions">

                <button
                  type="button"
                  className="notification-modal-close"
                  onClick={() =>
                    setShowAddForm(false)
                  }
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="notification-save-btn"
                >
                  Send Notification
                </button>

              </div>

            </form>

          </div>

        </div>

      )}

    </div>
  );
}

export default AdminNotifications;