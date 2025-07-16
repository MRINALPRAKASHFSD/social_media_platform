import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => (
  <nav className="navbar">
    <div className="navbar-logo">
      <Link to="/">SocialApp</Link>
    </div>
    <div className="navbar-links">
      <Link to="/">Feed</Link>
      <Link to="/profile/yourusername">Profile</Link>
      <Link to="/login">Login</Link>
      <Link to="/signup">Sign Up</Link>
    </div>
  </nav>
);

export default Navbar;