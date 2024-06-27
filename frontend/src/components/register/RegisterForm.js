import React from "react";

export default function Register() {
  return (
    <div className="container">
      <div className="left-side">
        <h2>Welcome to Our Store</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
          vehicula justo at massa facilisis, sit amet sodales sapien lacinia.
          Aliquam erat volutpat.
        </p>
      </div>
      <div className="right-side">
        <h2>Register</h2>
        <form>
          <div className="input-field">
            <label htmlFor="first-name">First Name</label>
            <input type="text" id="first-name" required />
          </div>
          <div className="input-field">
            <label htmlFor="last-name">Last Name</label>
            <input type="text" id="last-name" required />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" required />
          </div>
          <div className="input-field">
            <label htmlFor="gender">Gender</label>
            <select id="gender" required>
              <option value="" disabled selected>
                Select your gender
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <p>
              <a style={{ color: "white" }} href="/login">
                Click here to Login
              </a>
            </p>
          </div>
          <button type="submit" className="register-btn">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
