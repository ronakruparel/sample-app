import React from "react";
const LoginComponent = ({ handleChange, handleSubmit, username, password }) => {
  return (
    <div>
      <label>Username</label>
      <input
        type="text"
        name="username"
        value={username}
        onChange={handleChange}
      />
      <br />
      <label>Password</label>
      <input
        type="password"
        name="password"
        value={password}
        onChange={handleChange}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};
export default LoginComponent;
