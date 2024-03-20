import React from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/Home");
  };

  return (
    <div
      style={{
        textAlign: "center",
      }}
      className="login-wrapper"
    >
      <h1 style={{ fontSize: "40px" }}>Login Page</h1>
      <br />
      <form style={{ fontSize: "30px" }} onSubmit={handleSubmit}>
        <label>
          Username
          <br />
          <input type="text" required />
        </label>
        <br />
        <label>
          Password
          <br />
          <input type="password" required />
        </label>
        <br />
        <div>
          <button className="btn btn-primary btn-lg=" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
