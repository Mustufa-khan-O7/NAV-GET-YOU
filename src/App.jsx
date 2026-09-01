import "./App.css";
import AdminNotifications from "./pages/admin-notifications.jsx";
import AdminTransport from "./pages/admin-transport.jsx";
import AdminComplaint from "./pages/admin-complaint";
import AdminTimetable from "./pages/admin-timetable.jsx";
import AdminEvents from "./pages/admin-events.jsx";
import AdminStudent from "./pages/admin-student.jsx";
import AdminDashboard from "./pages/admin-dashboard.jsx";
import AdminLogin from "./pages/admin-login.jsx";
import Profile from "./pages/profile.jsx";
import Transport from "./pages/transport.jsx";
import Complaint from "./pages/complaint.jsx";
import Events from "./pages/events.jsx";
import Timetable from "./pages/timetable.jsx";
import Chatbot from "./pages/chatbot.jsx";
import Navigation from "./pages/navigation.jsx";
import Dashboard from "./pages/dashboard.jsx";
import Register from "./pages/register.jsx";
import { useState } from "react";
import Login from "./pages/login.jsx";
import logo from "./assets/logo.png";




function Landing({ onLogin, onRegister, onAdmin }) {
  return (
    <div className="app">

      {/* Navbar */}
      <nav className="navbar">

        <div className="logo">
          <img src={logo} alt="NAV GET YOU" />
        </div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#features">Features</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="nav-buttons">

          <button
            className="login-btn"
            onClick={onLogin}
          >
            Login
          </button>
                         <button
  className="admin-nav-btn"
  onClick={onAdmin}
>
  🔐 Admin
</button>



         <button
  className="start-btn"
  onClick={onRegister}
>
  Get Started
</button>
        </div>

      </nav>

      {/* Hero */}
      <main className="hero" id="home">

        <div className="hero-content">

          <div className="badge">
            ✦ Smart Campus. Smart Future.
          </div>

          <h1>
            Your Campus,
            <br />
            <span>One Smart Guide.</span>
          </h1>

          <p>
            NAV GET YOU is your intelligent campus assistant.
            Navigate your campus, check classes, discover events,
            track transport and get help — all in one place.
          </p>

          <div className="hero-buttons">

        <button
  className="primary-btn"
  onClick={onRegister}
>
  Get Started →
</button>

            <a
              href="#features"
              className="secondary-btn"
            >
              Explore Features
            </a>

          </div>

          <div className="stats">

            <div>
              <strong>100+</strong>
              <span>Campus Places</span>
            </div>

            <div>
              <strong>24/7</strong>
              <span>AI Assistance</span>
            </div>

            <div>
              <strong>1</strong>
              <span>Smart Platform</span>
            </div>

          </div>

        </div>

        {/* Campus Visual */}
        <div className="hero-visual">

          <div className="glow"></div>

          <div className="campus-card">

            <div className="building">

              <div className="tower">
                <div className="clock">◷</div>
              </div>

              <div className="building-body">
                <div className="window"></div>
                <div className="window"></div>
                <div className="window"></div>
                <div className="window"></div>
              </div>

            </div>

            <div className="map-line"></div>

            <div className="location-pin">
              
            </div>

          </div>

        </div>

      </main>

      {/* Features */}
      <section className="features" id="features">

        <div className="feature-card">
          <div className="feature-icon">⌖</div>
          <h3>Smart Navigation</h3>
          <p>
            Quickly find classrooms, labs, offices and
            other campus locations.
          </p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">✦</div>
          <h3>AI Chatbot</h3>
          <p>
            Get instant answers about your campus
            whenever you need them.
          </p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">▣</div>
          <h3>Smart Timetable</h3>
          <p>
            Keep track of your classes, labs and daily
            academic schedule.
          </p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">◉</div>
          <h3>Campus Events</h3>
          <p>
            Discover upcoming workshops, festivals
            and campus activities.
          </p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">♢</div>
          <h3>Complaint Portal</h3>
          <p>
            Submit and track campus complaints easily.
          </p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">▰</div>
          <h3>Campus Transport</h3>
          <p>
            Check buses, routes, locations and estimated
            arrival times.
          </p>
        </div>

      </section>

      {/* Footer */}
      <footer id="contact">

        <div className="logo">
          <img src={logo} alt="NAV GET YOU" />
        </div>

        <p>Smart Campus. Smart Future.</p>

      </footer>

    </div>
  );
}

function App() {

  const [page, setPage] = useState("home");
  if (page === "login") {
    return (
      <Login
        onBack={() => setPage("home")}
        onRegister={() => setPage("register")}
        onLogin={() => setPage("dashboard")}
        onTimetable={() => setPage("timetable")}
      />
    );
  }

  if (page === "register") {
    return (
      <Register
        onBack={() => setPage("home")}
        onLogin={() => setPage("login")}
      />
    );
  }

if (page === "navigation") {
  return (
    <Navigation
      onBack={() => setPage("dashboard")}
    />
  );
}

if (page === "chatbot") {
  return (
    <Chatbot
      onBack={() => setPage("dashboard")}
    />
  );
}

if (page === "timetable") {
  return (
    <Timetable
      onBack={() => setPage("dashboard")}
    />
  );
}

if (page === "events") {
  return (
    <Events
      onBack={() => setPage("dashboard")}
    />
  );
}

if (page === "complaint") {
  return (
    <Complaint
      onBack={() => setPage("dashboard")}
    />
  );
}

if (page === "transport") {
  return (
    <Transport
      onBack={() => setPage("dashboard")}
    />
  );
}

if (page === "profile") {
  return (
    <Profile
      onBack={() => setPage("dashboard")}
    />
  );
}

if (page === "admin-login") {
  return (
    <AdminLogin
      onLogin={() => setPage("admin-dashboard")}
      onBack={() => setPage("landing")}
    />
  );
}

if (page === "admin-students") {
  return (
    <AdminStudent
      onBack={() => setPage("admin-dashboard")}
    />
  );
}

if (page === "admin-timetable") {
  return (
    <AdminTimetable
      onBack={() => setPage("admin-dashboard")}
    />
  );
}

if (page === "admin-events") {
  return (
    <AdminEvents
      onBack={() => setPage("admin-dashboard")}
    />
  );
}

{/*if (page === "complaint") {
  return (
    <Complaint
      onBack={() => setPage("dashboard")}
    />
  );
}*/}

if (page === "admin-complaints") {
  return (
    <AdminComplaint
      onBack={() => setPage("admin-dashboard")}
    />
  );
}

if (page === "admin-transport") {
  return (
    <AdminTransport
      onBack={() => setPage("admin-dashboard")}
    />
  );
}

if (page === "admin-notifications") {
  return (
    <AdminNotifications
      onBack={() => setPage("admin-dashboard")}
    />
  );
}


if (page === "admin-dashboard") {
  return (
    <AdminDashboard
      onStudents={() => setPage("admin-students")}
      onTimetable={() => setPage("admin-timetable")}
      onEvents={() => setPage("admin-events")}
      onComplaint={() => setPage("admin-complaints")}
      onComplaints={() => setPage("admin-complaints")}
      onTransport={() => setPage("admin-transport")}
      onNotifications={() => setPage("admin-notifications")}
      onLogout={() => setPage("admin-login")}
      onBack={() => setPage("dashboard")} 
    />
  );
}



const openAdminDashboard = () => {
  setPage("admin-dashboard");
};



if (page === "dashboard") {
  return (
    <Dashboard
      onLogout={() => setPage("home")}
      onNavigation={() => setPage("navigation")}
      onChatbot={() => setPage("chatbot")}
      onTimetable={() => setPage("timetable")}
      onEvents={() => setPage("events")}
    onComplaint={() => setPage("complaint")}
      onTransport={() => setPage("transport")}
      onProfile={() => setPage("profile")}
      onClick={() => setPage("admin-students")}
    />
  );
}


  return (
    <Landing
      onLogin={() => setPage("login")}
      onRegister={() => setPage("register")}
      onAdmin={() => setPage("admin-login")}
    />
  );
}

export default App;