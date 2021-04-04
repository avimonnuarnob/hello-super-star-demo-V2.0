import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <div className="align-items-center p-md-4 bg-dark box-shadow">
        <nav
          className="navbar navbar-expand-lg navbar-light"
          style={{ padding: '0px' }}
        >
          <div className="container-fluid pull-right bg-dark">
            <Link className="navbar-brand" to="/">
              <img src="images/logo-01.png" alt="" style={{ width: '90px' }} />
            </Link>
            <button
              className="navbar-toggler bg-light"
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
                <a
                  className="nav-link active text-light "
                  aria-current="page"
                  href="#"
                >
                  Home
                </a>
                <a className="nav-link text-light" href="#">
                  About us
                </a>
                <Link to="/shop" className="nav-link text-light">
                  Star Shop
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 220"
        style={{ stroke: 'none' }}
      >
        <path
          fill="#212121"
          fill-opacity="1"
          d="M0,64L26.7,74.7C53.3,85,107,107,160,112C213.3,117,267,107,320,85.3C373.3,64,427,32,480,37.3C533.3,43,587,85,640,101.3C693.3,117,747,107,800,117.3C853.3,128,907,160,960,181.3C1013.3,203,1067,213,1120,186.7C1173.3,160,1227,96,1280,74.7C1333.3,53,1387,75,1413,85.3L1440,96L1440,0L1413.3,0C1386.7,0,1333,0,1280,0C1226.7,0,1173,0,1120,0C1066.7,0,1013,0,960,0C906.7,0,853,0,800,0C746.7,0,693,0,640,0C586.7,0,533,0,480,0C426.7,0,373,0,320,0C266.7,0,213,0,160,0C106.7,0,53,0,27,0L0,0Z"
        ></path>
      </svg>
    </>
  );
};

export default Header;
