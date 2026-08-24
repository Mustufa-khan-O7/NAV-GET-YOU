import logo from "../assets/logo.png";
import { useState } from "react";
function Dashboard({ onLogout, onNavigation, onChatbot, onTimetable, onEvents, onComplaint, onTransport, onProfile ,onNotifications
 }) {
const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="dashboard-page">


{/* Mobile Header / Logo */}

<div className="mobile-header">
  <img
    src={logo}
    alt="NAV GET YOU"
    onClick={() => setSidebarOpen(!sidebarOpen)}
  />
</div>


{/* Sidebar */}

<aside
  className={`sidebar ${
    sidebarOpen ? "mobile-sidebar-open" : ""
  }`}
>

  {/* Sidebar Logo */}

  <div
    className="sidebar-logo"
    onClick={() => setSidebarOpen(!sidebarOpen)}
  >
    <img
      src={logo}
      alt="NAV GET YOU"
    />
  </div>


  {/* Sidebar Menu */}

  <nav className="sidebar-nav">

    <button className="sidebar-item active">
      <span>🏠</span>
      <span>Dashboard</span>
    </button>

    <button
      className="sidebar-item"
      onClick={onNavigation}
    >
      <span>🧭</span>
      <span>Navigation</span>
    </button>

    <button
      className="sidebar-item"
      onClick={onTimetable}
    >
      <span>📅</span>
      <span>Timetable</span>
    </button>

    <button
      className="sidebar-item"
      onClick={onEvents}
    >
      <span>🎉</span>
      <span>Events</span>
    </button>

    <button
      className="sidebar-item"
      onClick={onComplaint}
    >
      <span>📝</span>
      <span>Complaint</span>
    </button>

    <button
      className="sidebar-item"
      onClick={onTransport}
    >
      <span>🚌</span>
      <span>Transport</span>
    </button>

    <button
      className="sidebar-item"
      onClick={onProfile}
    >
      <span>👤</span>
      <span>Profile</span>
    </button>

    <button
      className="sidebar-item"
      onClick={onNotifications}
    >
      <span>🔔</span>
      <span>Notifications</span>
    </button>

  </nav>



        <button
          className="logout-btn"
          onClick={onLogout}
        >
          🚪 Logout
        </button>

      </aside>

      {/* Main Dashboard */}
      <main className="dashboard-main">

        {/* Topbar */}
        <header className="dashboard-topbar">

          <div className="search-box">
            🔍
            <input
              type="text"
              placeholder="Search anything..."
            />
          </div>

          <div className="user-area">
            <span>🔔</span>

            <div className="user-avatar">
              M
            </div>

            <div>
              <strong>Mustufa</strong>
              <small>BCA AI-DA</small>
            </div>
          </div>

        </header>

        {/* Welcome */}
        <section className="welcome-section">

          <div>
            <p className="small-text">
              Welcome back 👋
            </p>

            <h1>
              Good Morning, Mustufa!
            </h1>

            <p>
              Ready to make your campus day smarter?
            </p>
          </div>

          <div className="date-card">
            <strong>23</strong>
            <div>
              <span>AUG</span>
              <small>SUNDAY</small>
            </div>
          </div>

        </section>

        {/* Dashboard Grid */}
        <section className="dashboard-grid">

          {/* Today's Classes */}
          <div className="dashboard-card classes-card">

            <div className="card-header">
              <h2>Today's Classes</h2>
              <button>View Timetable</button>
            </div>

            <div className="class-item">
              <div>
                <strong>Database Management System</strong>
                <span>Room C-203</span>
              </div>
              <time>09:00 AM</time>
            </div>

            <div className="class-item">
              <div>
                <strong>Java Programming</strong>
                <span>Room C-204</span>
              </div>
              <time>11:00 AM</time>
            </div>

            <div className="class-item">
              <div>
                <strong>Web Development Lab</strong>
                <span>Lab D-105</span>
              </div>
              <time>02:00 PM</time>
            </div>

          </div>

          {/* Quick Access */}
          <div className="dashboard-card">

            <div className="card-header">
              <h2>Quick Access</h2>
            </div>

            <div className="quick-grid">

<button
  onClick={onNavigation}
>
  🧭
  <span>Smart Navigation</span>
</button>

<button
  onClick={onChatbot}
>
  🤖
  <span>AI Chatbot</span>
</button>

 <button onClick={onTimetable}>
  📅
  <span>Timetable</span>
</button>

 <button
onClick={onEvents}>
     🎉
     <span>Events</span>
</button>

 <button
onClick={onComplaint}>
        📝
        <span>Complaints</span>
</button>

<button
onClick={onTransport}>
     🚌
<span>Transport</span>
</button>

            </div>

          </div>

        </section>

        {/* Announcements */}
        <section className="dashboard-card announcements">

          <div className="card-header">
            <h2>Latest Announcements</h2>
            <button>View All</button>
          </div>

          <div className="announcement">
            <span>📢</span>

            <div>
              <strong>Hackathon 2026 registrations are open!</strong>
              <p>Registration deadline is approaching.</p>
            </div>

            <small>2h ago</small>
          </div>

          <div className="announcement">
            <span>📚</span>

            <div>
              <strong>New timetable has been published.</strong>
              <p>Check your updated class schedule.</p>
            </div>

            <small>5h ago</small>
          </div>

        </section>

      </main>

    </div>
  );
}

export default Dashboard;