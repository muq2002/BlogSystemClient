import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

function Header() {
  const navigate = useNavigate();
  function logout() {
    setCookies("access_token", "");
    window.localStorage.clear();
    navigate("/login");
  }
  const [cookies, setCookies] = useCookies(["access_token"]);
  return (
    <header>
      <div className="logo">
        <Link to="/">M2TRONIX</Link>
      </div>
      <div className="nav ">
        {!cookies.access_token ? (
          <>
            <Link to="login">Login </Link>
            <Link
              to="register"
              style={{
                color: "green",
              }}
            >
              Register{" "}
            </Link>
          </>
        ) : (
          <div
            style={{
              display: "flex",
              gap: "10px",
            }}
          >
            <button onClick={logout}> Logout </button>
            <Link
              to="create"
              style={{
                color: "blue",
              }}
            >
              Create Post
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
