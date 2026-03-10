import React from "react";
import { useNavigate } from "react-router-dom";
import "./LandingPage.scss";

function LandingPage() {

  const navigate = useNavigate();

  return (
    <div className="landingPage">

      <div className="overlay">

        <h1>🍲 Food Recipe App</h1>

        <button
          className="loginBtn"
          onClick={() => navigate("/login")}
        >
          Login
        </button>

      </div>

    </div>
  );
}

export default LandingPage;