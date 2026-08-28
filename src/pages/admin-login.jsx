import { useState } from "react";
import logo from "../assets/logo.png";

function AdminLogin({ onLogin, onBack }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Temporary admin login
    if (
      email === "admin@navgetyou.com" &&
      password === "admin123"
    ) {
      onLogin();
    } else {
      alert("Invalid admin email or password");
    }
  };

  return (
    <div className="admin-login-page">

      <button
        className="admin-back-btn"
        onClick={onBack}
        title="Back"
      >
        ←
      </button>

      <div className="admin-login-card">

        {/* Logo */}
        <div className="admin-logo">
          <img src={logo} alt="NAV GET YOU" />
        </div>

        <div className="admin-badge">
          🔐 ADMIN
        </div>

        <h1>Admin Login</h1>

        <p className="admin-subtitle">
          Manage NAV GET YOU campus services
        </p>

        <form onSubmit={handleSubmit}>

          <div className="admin-input-group">
            <label>Admin Email</label>

            <input
              type="email"
              placeholder="Enter admin email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="admin-input-group">
            <label>Password</label>

            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="admin-login-btn"
          >
            Login to Admin Panel →
          </button>

        </form>

        <p className="admin-note">
          Authorized administrators only
        </p>

      </div>

    </div>
  );
}

export default AdminLogin;