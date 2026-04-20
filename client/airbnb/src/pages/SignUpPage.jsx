import { Link } from "react-router-dom";
import "./../styles/auth.css";

export default function SignUpPage() {
  return (
    <div className="auth-page">
      <div className="auth-card">
        <h1 className="auth-title">Create Account</h1>

        <p className="auth-subtitle">
          Already have an account? <Link to="/signin">Sign In</Link>
        </p>

        <form className="auth-form">
          <div className="auth-field">
            <label htmlFor="email">Email</label>
            <input id="email" type="email" placeholder="Enter Email Address" />
          </div>

          <div className="auth-field">
            <label htmlFor="password">Password</label>
            <input id="password" type="password" placeholder="Enter Password" />
          </div>

          <button type="submit" className="auth-submit-btn">
            Create Account
          </button>
        </form>

        <p className="auth-terms">
          By creating an account, you agree to our{" "}
          <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.
        </p>

        <div className="auth-divider">
          <span>Or sign up using:</span>
        </div>

        <div className="social-buttons">
          <button type="button" className="social-btn">
            <span className="social-icon google">G</span>
            <span>Continue with Google</span>
          </button>

          <button type="button" className="social-btn">
            <span className="social-icon facebook">f</span>
            <span>Continue with Facebook</span>
          </button>
        </div>
      </div>
    </div>
  );
}