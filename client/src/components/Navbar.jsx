import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <Link to="/gardens/new">
        <button>Post Garden</button>
      </Link>
      <Link to="/home"><button>Home</button></Link>
    </div>
  );
}
