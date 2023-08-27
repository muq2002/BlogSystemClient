import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [_, setCookies] = useCookies(["access_token"]);
  const navigate = useNavigate();

  function loginHandler(event) {
    event.preventDefault();
    loginUser();
  }

  async function loginUser() {
    try {
      const response = await axios.post("http://localhost:5000/users/login", {
        email,
        password,
      });

      if (response.data.token !== undefined) {
        setCookies("access_token", response.data.token);
        window.localStorage.setItem("userID", response.data.userID);

        navigate("/");
      } else {
        toast("Incorrect email and password!");
      }
      console.log(response);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="warper">
      <ToastContainer />
      <h1>Login</h1>
      <form onSubmit={loginHandler}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          maxlength="6"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <button>Login</button>
      </form>
    </div>
  );
}

export default Login;
