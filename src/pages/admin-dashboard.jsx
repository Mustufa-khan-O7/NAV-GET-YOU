import logo from "../assets/logo.png";

function AdminDashboard({
  onStudents,
  onTimetable,
  onEvents,
  onComplaints,
  onTransport,
  onNotifications,
  onLogout,
}) {
  return (
    <div className="admin-dashboard">

      {/* ================= SIDEBAR ================= */}

      <aside className="admin-sidebar">

        <div className="admin-logo">
          <img src={logo} alt="NAV GET YOU" />

          <div>
            <h2>NAV GET YOU</h2>
            <p>ADMIN PANEL</p>
          </div>
        </div>


        <nav className="admin-menu">

          <button className="active">
            <span>📊</span>
            Dashboard
          </button>

          <button onClick={onStudents}>
            <span>👥</span>
            Students
          </button>

          <button onClick={onTimetable}>
            <span>📅</span>
            Timetable
          </button>

          <button onClick={onEvents}>
            <span>🎉</span>
            Events
          </button>

          <button onClick={onComplaints}>
            <span>📝</span>
            Complaints
          </button>

          <button onClick={onTransport}>
            <span>🚌</span>
            Transport
          </button>

          <button onClick={onNotifications}>
            <span>🔔</span>
            Notifications
          </button>

        </nav>


        <button
          className="admin-logout"
          onClick={onLogout}
        >
          <span>🚪</span>
          Logout
        </button>

      </aside>


      {/* ================= MAIN ================= */}

      <main className="admin-main">

        {/* Header */}

        <div className="admin-header">

          <div>
            <h1>Admin Dashboard</h1>

            <p>
              Manage NAV GET YOU campus services
            </p>
          </div>


          <div className="admin-user">

            <div className="admin-avatar">
              A
            </div>

            <div>
              <strong>Administrator</strong>
              <small>Super Admin</small>
            </div>

          </div>

        </div>


        {/* ================= STATS ================= */}

        <div className="admin-stats">

          <div className="admin-stat-card">
            <span>👥</span>

            <div>
              <p>Total Students</p>
              <h2>1,248</h2>
            </div>
          </div>


          <div className="admin-stat-card">
            <span>📝</span>

            <div>
              <p>Pending Complaints</p>
              <h2>24</h2>
            </div>
          </div>


          <div className="admin-stat-card">
            <span>🎉</span>

            <div>
              <p>Upcoming Events</p>
              <h2>12</h2>
            </div>
          </div>


          <div className="admin-stat-card">
            <span>🚌</span>

            <div>
              <p>Active Buses</p>
              <h2>18</h2>
            </div>
          </div>

        </div>


        {/* ================= CONTENT ================= */}

        <div className="admin-content">


          {/* Complaints */}

          <div className="admin-card">

            <div className="card-header">

              <h2>Recent Complaints</h2>

              <button onClick={onComplaints}>
                View All
              </button>

            </div>


            <div className="complaint-item">

              <span>🚌</span>

              <div>
                <strong>Bus timing issue</strong>
                <small>Rahul Sharma</small>
              </div>

              <b className="status pending">
                Pending
              </b>

            </div>


            <div className="complaint-item">

              <span>📚</span>

              <div>
                <strong>Classroom issue</strong>
                <small>Ayan Khan</small>
              </div>

              <b className="status progress">
                In Progress
              </b>

            </div>


            <div className="complaint-item">

              <span>💻</span>

              <div>
                <strong>Computer issue</strong>
                <small>Arjun Patel</small>
              </div>

              <b className="status resolved">
                Resolved
              </b>

            </div>

          </div>


          {/* Events */}

          <div className="admin-card">

            <div className="card-header">

              <h2>Upcoming Events</h2>

              <button onClick={onEvents}>
                View All
              </button>

            </div>


            <div className="event-item">

              <div className="event-date">
                <strong>28</strong>
                <small>AUG</small>
              </div>

              <div>
                <strong>AI & Technology Workshop</strong>
                <small>Seminar Hall • 10:00 AM</small>
              </div>

            </div>


            <div className="event-item">

              <div className="event-date">
                <strong>02</strong>
                <small>SEP</small>
              </div>

              <div>
                <strong>Sports Day</strong>
                <small>College Ground • 9:00 AM</small>
              </div>

            </div>


            <div className="event-item">

              <div className="event-date">
                <strong>10</strong>
                <small>SEP</small>
              </div>

              <div>
                <strong>Tech Fest 2026</strong>
                <small>Main Auditorium • 11:00 AM</small>
              </div>

            </div>

          </div>

        </div>


        {/* ================= QUICK ACTIONS ================= */}

        <div className="admin-card quick-actions">

          <div className="card-header">
            <h2>Quick Actions</h2>
          </div>


          <div className="action-grid">

            <button onClick={onStudents}>
              👥
              <span>Manage Students</span>
            </button>

            <button onClick={onTimetable}>
             📅
            <span>Timetable</span>
            </button>

            <button onClick={onEvents}>
              🎉
              <span>Manage Events</span>
            </button>

            <button onClick={onComplaints}>
              📝
              <span>Manage Complaints</span>
            </button>

            <button onClick={onNotifications}>
              🔔
              <span>Send Notification</span>
            </button>

          </div>

        </div>

      </main>

    </div>
  );
}

export default AdminDashboard;