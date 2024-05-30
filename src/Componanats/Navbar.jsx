import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Books
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
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <div className="navbar-nav">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
            </Link>
            <Link className="nav-link active" aria-current="page" to="/Product">
                All Books
            </Link>
            <Link className="nav-link active" aria-current="page" to="/Create">
                Add Book
            </Link>
            
              
              
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
