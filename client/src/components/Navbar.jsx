import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <div className="navbar">
        <Link to="/home">
          <button>Home</button>
        </Link>
        <Link to="/gardens/new">
          <button>Post yr Garden!</button>
        </Link>
        <Link to="/signup">
          <button>Sign Up!</button>
        </Link>
        <Link to="/login">
          <button>Login</button>
        </Link>
      </div>
    </div>
  );
}
