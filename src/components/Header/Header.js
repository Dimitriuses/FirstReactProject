import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <Fragment>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        APP name
      </Link>
      <div className="navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/add">
              Add New
            </Link>
          </li>
        </ul>
      </div>
    </nav>

    <div className="row">
      <h2 className="text-center">
        <span>Contact list</span>Created with <i className="fa fa-heart" /> for me
      </h2>
    </div>
  </Fragment>
);

export default Header;
