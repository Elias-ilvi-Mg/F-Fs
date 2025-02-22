import React from 'react'
import './navbar.css'
import projectData from '../assets/locales/en.json'
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { link1, link5, link2, logoSrc, logoAlt, link3, action1, action2, link4 } = projectData.navbar

  return (
    <header className="navbar-container">
      <header data-thq="thq-navbar" className="navbar-navbar-interactive">
        {/* <img
          alt={logoAlt}
          src={logoSrc}
          className="navbar-image1"
        /> */}
        <div data-thq="thq-navbar-nav" className="navbar-desktop-menu">
          <nav className="navbar-links1">
            {/* <span className="thq-link thq-body-small">{link1}</span> */}
            <span className="thq-link thq-body-small">{link2}</span>
            <span className="thq-link thq-body-small">{link3}</span>
            <span className="thq-link thq-body-small">{link4}</span>
            <span className="thq-link thq-body-small">{link5}</span>
          </nav>
          <div className="navbar-buttons1">
            {/* <button className="navbar-action11 thq-button-animated thq-button-filled">
              <span className="thq-body-small">{action1}</span>
            </button> */}
            <button className="navbar-action21 thq-link ">
              <Link className="thq-body-small">{action1}</Link>
            </button>
          </div>
        </div>
        <div data-thq="thq-burger-menu" className="navbar-burger-menu">
          <svg viewBox="0 0 1024 1024" className="navbar-icon1">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div data-thq="thq-mobile-menu" className="navbar-mobile-menu">
          <div className="navbar-nav">
            <div className="navbar-top">
              <img
                alt={logoAlt}
                src={logoSrc}
                className="navbar-logo"
              />
              <div data-thq="thq-close-menu" className="navbar-close-menu">
                <svg viewBox="0 0 1024 1024" className="navbar-icon3">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <nav className="navbar-links2">
              <span className="thq-link thq-body-small">{link1}</span>
              <span className="thq-link thq-body-small">{link2}</span>
              <span className="thq-link thq-body-small">{link3}</span>
              <span className="thq-link thq-body-small">{link4}</span>
              <span className="thq-link thq-body-small">{link5}</span>
            </nav>
          </div>
          <div className="navbar-buttons2">
            <button className="thq-button-filled">Login</button>
            <button className="thq-button-outline">Register</button>
          </div>
        </div>
      </header>
    </header>
  )
}

export default Navbar
