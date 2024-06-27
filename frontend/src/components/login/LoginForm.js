export default function LoginForm() {
  return (
    <div className="container">
      <div className="login-form">
        <h2>Welcome To Your Store</h2>
        <p>Please log in to your account</p>
        <form>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" required />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" required />
          </div>
          <a href="#" className="forgot-pass">
            Forgot password?
          </a>
          <button type="submit" className="login-btn">
            Log In
          </button>
        </form>
        <div className="signup-link">
          Don't have an account? <a href="/register">Sign up</a>
        </div>
      </div>
    </div>
  );
}
