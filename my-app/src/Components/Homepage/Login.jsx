import React from "react";
import { useNavigate, } from "react-router-dom";




function Login() {
  const navigate = useNavigate();
  return (
    <>
      <h1 className="title" style={{ textAlign: "center" }}>Login Form</h1>
      <form className="App">
        <input type="text" placeholder="Username" />
        <br />
        <input type="password" placeholder="Password" />
        <br />
        <button onClick={() => {
          navigate("/home");
        }}>Click me</button>
      </form>
    </>
  );
}

export default Login;
