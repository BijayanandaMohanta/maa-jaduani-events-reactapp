import React from 'react';
import logo from '../assets/logo/logo.jpg';


import '../styles/style.css';

function Header() {
  return (
    <>
      <div className="top-bar bg-dark text-white d-md-flex align-items-center justify-content-between px-4 py-3">
        <div className="contact-info d-md-flex align-items-center gap-3">
          <p className="mb-0"><i className="bi bi-telephone-fill"></i> +91 895 510 5100</p>
          <p className="mb-0"><i className="bi bi-envelope-fill"></i> info@maajaduanievents.com</p>
        </div>
        <div className="socialmedia d-flex align-items-center gap-3">
          <span>Social Links</span>
          <a href="#" className="text-white"><i className="bi bi-facebook"></i></a>
          <a href="#" className="text-white"><i className="bi bi-instagram"></i></a>
          <a href="#" className="text-white"><i className="bi bi-twitter-x"></i></a>
          <a href="#" className="text-white"><i className="bi bi-youtube"></i></a>
          <a href="#" className="text-white"><i className="bi bi-linkedin"></i></a>
          <a href="#" className="text-white"><i className="bi bi-pinterest"></i></a>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="" width="150" />
          </a>
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">
                  About
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Service
                </a>
                <div className="dropdown-menu dropdown-multicol">
                  <div className="d-flex">
                    <div>
                      <ul className="menu">
                        <li>
                          <a className="dropdown-item" href="#">
                            Decoration
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Event Organisation
                          </a>
                        </li>
                        <li>
                          <hr className="dropdown-divider" />
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            DJ and Others.
                          </a>
                        </li>
                      </ul>
                    </div>
                    <img
                      src="https://th.bing.com/th/id/OIP.o6OpWzB9PiRuc0zfo9KzMQAAAA?rs=1&pid=ImgDetMain"
                      alt="Service Image"
                      className="dropdown-image me-2"
                    />
                  </div>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/events">
                  Events
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Gallery
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contacts
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search Event"
                aria-label="Search"
              />
              <button className="btn btn-outline-dark" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
