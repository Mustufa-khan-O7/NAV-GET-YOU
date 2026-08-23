import logo from "../assets/logo.png";

function Login({ onBack, onRegister, onLogin }) {
  return (
    <div className="auth-page">

      <div className="auth-card">

        {/* Logo */}
        <div className="auth-logo">
          <img src={logo} alt="NAV GET YOU" />
        </div>

        <h1>Welcome Back</h1>

        <p className="auth-subtitle">
          Login to continue to NAV GET YOU
        </p>

        <form>

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
              placeholder="Enter your password"
            />
          </div>

          <div className="form-options">

            <label className="remember">
              <input type="checkbox" />
              Remember me
            </label>

            <a href="#forgot">
              Forgot Password?
            </a>

          </div>

          <button
  type="button"
  className="auth-btn"
  onClick={onLogin}
>
  Login →
</button>

        </form>

        <p className="switch-auth">
          Don't have an account?
   <button
  type="button"
  className="text-btn"
  onClick={onRegister}
>
  Create Account
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

export default Login;