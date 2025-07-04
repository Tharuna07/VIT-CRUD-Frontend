import React from "react";
import "../Styles/Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="navbar">
      <Link className="brand-Name">FLASH</Link>
      <div className="navbar-inner">
        <Link to="/" id="link-text">
          Home
        </Link>
        <Link to="/men" id="link-text">
          Men
        </Link>
        <Link to="/women" id="link-text">
          Women
        </Link>
        <Link>
          <input
            type="text"
            placeholder="search for products,brands and more"
            id="link-test"
            className="s3"
          ></input>
        </Link>
        <Link to="/signup" id="link-text">
          Sign up
        </Link>
        <Link to="/login" id="link-text">
          Login
        </Link>
        <Link to="/userdetails" id="link-text">
          User Details
        </Link>

        <Link to="/cart" id="link-text">
          Cart
        </Link>
      </div>
    </div>
  );
}

export default Header;
