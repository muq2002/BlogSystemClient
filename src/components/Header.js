import React from "react";
import { Link } from "react-router-dom";

import Login from "../routes/Login";
import Register from "../routes/Register";

function Header() {
  return (
    <header>
      <div className="logo">
        <Link to="/">M2TRONIX</Link>
      </div>
      <div className="nav ">
        <Link to="login">Login </Link>
        <Link to="register">Register </Link>
        <Link
          to="create"
          style={{
            color: "blue",
          }}
        >
          Create Post
        </Link>
      </div>
    </header>
  );
}

export default Header;
