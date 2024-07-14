import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState("/");

  useEffect(() => {
    setActiveTab(location.pathname);
  }, [location.pathname]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link
          to="/"
          className={`navbar-brand ps-4 ${activeTab === "/" ? "active" : ""}`}
          onClick={() => handleTabClick("/")}
        >
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
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-lg-center pe-lg-5 me-lg-5"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav">
            <Link
              to="/"
              className={`nav-link ${activeTab === "/" ? "active" : ""}`}
              onClick={() => handleTabClick("/")}
            >
              All
            </Link>
            <Link
              to="/fullstack"
              className={`nav-link ${activeTab === "/fullstack" ? "active" : ""}`}
              onClick={() => handleTabClick("/fullstack")}
            >
              Full Stack Development
            </Link>
            <Link
              to="/datascience"
              className={`nav-link ${activeTab === "/datascience" ? "active" : ""}`}
              onClick={() => handleTabClick("/datascience")}
            >
              Data Science
            </Link>
            <Link
              to="/cybersecurity"
              className={`nav-link ${activeTab === "/cybersecurity" ? "active" : ""}`}
              onClick={() => handleTabClick("/cybersecurity")}
            >
              Cyber Security
            </Link>
            <Link
              to="/career"
              className={`nav-link ${activeTab === "/career" ? "active" : ""}`}
              onClick={() => handleTabClick("/career")}
            >
              Career
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
