import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <div className="align-items-center px-md-4 mb-3 bg-white border-bottom box-shadow">
        <nav
          className="navbar navbar-expand-lg navbar-light"
          style={{ padding: '0px' }}
        >
          <div className="container-fluid pull-right">
            <Link className="navbar-brand" to="/">
              <img src="images/logo-01.png" alt="" style={{ width: '90px' }} />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav" style={{ paddingLeft: '80%' }}>
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
                <a className="nav-link" href="#">
                  About us
                </a>
                <Link to="/shop" className="nav-link">
                  Star Shop
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
