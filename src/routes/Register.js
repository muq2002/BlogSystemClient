import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  async function registerUser(){
    const response = await axios.post("http://localhost:5000/users/register", 
    {
      name,
      email,
      password
    });
    if(response !== undefined){
      toast("Registration Completed! Now login.");
    }
  }
  function registerHandler(event) {
    event.preventDefault();
    registerUser();
  }
  return (
    <div className="warper">
            <ToastContainer />
      <h1>Register</h1>
      <form onSubmit={registerHandler}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
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
        <button>Register</button>
      </form>

    </div>
  );
}

export default Register;
