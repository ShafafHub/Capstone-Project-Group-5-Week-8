import "./../styles/auth.css";

export default function SignInPage() {
  return (
    <div className="auth-page">
      <div className="auth-card">
        <h1 className="auth-title">Sign In</h1>

        <p className="auth-subtitle">
          New to Our Product? <a href="/signup">Create an Account</a>
        </p>

        <form className="auth-form">
<<<<<<< HEAD
          ‍{" "}
=======
          ‍
>>>>>>> ceaca6a0904342bd81835f7a5d90e002be76370e
          <div className="auth-field">
            <label htmlFor="email">Email</label>
            <input id="email" type="email" placeholder="Enter Email Address" />
          </div>
          <div className="auth-field">
            <label htmlFor="password">Password</label>
            <input id="password" type="password" placeholder="Enter Password" />
          </div>
          <div className="auth-options">
            <label className="remember-me">
              <input type="checkbox" />
              <span>Keep me signed in</span>
            </label>
          </div>
          <button type="submit" className="auth-submit-btn">
            Sign In
          </button>
          <a href="#" className="auth-forgot-link">
            Forgot your password?
          </a>
        </form>

        <div className="auth-divider">
          <span>Or sign in using:</span>
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
