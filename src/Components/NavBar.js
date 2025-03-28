import React from "react";
import { Link } from "react-router-dom";

const NavBar = ()=> {
    return (
      <div>
        <nav className="navbar fixed-top navbar-expand-lg bg-dark">
          <div className="container-fluid">
            <Link to="/" className="navbar-brand text-light">
              IndianNews
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link to="/"
                    className="nav-link active text-light"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/business" className="nav-link text-light">
                    Business
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/entertainment" className="nav-link text-light">
                    Entertainment
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/general" className="nav-link text-light">
                    General
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/health" className="nav-link text-light">
                    Health
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/science" className="nav-link text-light">
                    Science
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/sports" className="nav-link text-light">
                    Sports
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/technology" className="nav-link text-light">
                    Technology
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
}

export default NavBar;