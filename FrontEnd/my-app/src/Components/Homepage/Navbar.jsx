import React from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../Business.png";
import "bootstrap/dist/js/bootstrap.bundle";

const Navbar = () => {
  const location = useLocation();

  if (location.pathname === "/Login") {
    return null;
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <Link to="/Home" className="navbar-brand" aria-label="home">
        <img src={Logo} alt="Logo Icon" className="navbar-brand" width="75px" />
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <ul style={{ display: "flex", padding: "10px" }}>
            <li className="nav-item">
              <Link className="nav-item nav-link active" to="/home">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-item nav-link active" to="/items">
                Items
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-item nav-link active" to="/basket">
                Basket
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-item nav-link active" to="/createitems">
                Add Items
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                User
              </a>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="/">
                  Log off
                </a>
              </div>
            </li>
            <li className="nav-item"></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
