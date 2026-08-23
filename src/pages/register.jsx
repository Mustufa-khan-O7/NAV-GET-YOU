import logo from "../assets/logo.png";
function Register({ onBack, onLogin }) {
  return (
    <div className="auth-page">

      <div className="auth-card">

        {/* Logo */}
        <div className="auth-logo">
          <img src={logo} alt="NAV GET YOU" />
        </div>

        <h1>Create Account</h1>

        <p className="auth-subtitle">
          Join NAV GET YOU and make your campus experience smarter
        </p>

        <form>

          <div className="input-group">
            <label>Full Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
            />
          </div>

          <div className="input-group">
            <label>Email Address</label>
            <input
              type="email"
              placeholder="Enter your email"
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Create a password"
            />
          </div>

          <div className="input-group">
            <label>Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm your password"
            />
          </div>

          <button
            type="submit"
            className="auth-btn"
          >
            Create Account →
          </button>

        </form>

        <p className="switch-auth">
          Already have an account?
          <button
            type="button"
            className="text-btn"
            onClick={onLogin}
          >
            Login
          </button>
        </p>

        <button
          className="back-home"
          onClick={onBack}
        >
          ← Back to Home
        </button>

      </div>

    </div>
  );
}

export default Register;