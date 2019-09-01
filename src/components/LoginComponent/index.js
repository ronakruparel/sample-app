import React from "react";
import "./style.css";
import Logo from "../../assets/images/logo.png";
const LoginComponent = ({ handleChange, handleSubmit, username, password }) => {
  return (
    <div className="loginWrapper">
      <img className="logo" alt="Logo" src={Logo} />
      <div className="inputWrapper">
        <h4>Login to get Started</h4>
        <label>Username</label>
        <input
          type="text"
          name="username"
          value={username}
          onChange={handleChange}
        />

        <label>Password</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
      </div>
      <button className="loginButton" onClick={handleSubmit}>
        Log In
      </button>
    </div>
  );
};
export default LoginComponent;
