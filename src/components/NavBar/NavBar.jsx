import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import styles from "./NavBar.module.scss";
import cn from "classnames";
import LogoLeftAligned from "../icons/LogoLeftAligned";
import CampaignIcon from "@mui/icons-material/Campaign";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isInfoOpen, setIsInfoOpen] = useState(false); // dropdown for "Information"

  const handleNavClick = () => {
    setIsMenuOpen(false);
    setIsInfoOpen(false);
  };

  return (
    <nav className={styles.wrapper}>
      <div className={styles.loginWrapper}>
        <a
          data-organisationid="4"
          data-organisation="isfnr2026"
          href="https://nomadit.co.uk/account/contact"
          className="login-button"
          accessKey="3"
          target="_blank"
          rel="noopener noreferrer"
          title="Login"
          onClick={handleNavClick}
        >
          <i className="fas fa-user"></i> <span>Login</span>
        </a>
      </div>

      {/* Hamburger icon - shown on mobile */}
      <button
        className={styles.hamburger}
        onClick={() => {
          setIsMenuOpen((prev) => !prev);
          // close dropdown when main menu is toggled
          setIsInfoOpen(false);
        }}
        aria-label="Toggle navigation menu"
        aria-expanded={isMenuOpen}
      >
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </button>

      <div className={styles.content}>
        <div className={styles.logo}>
          <NavLink to="/">
            <LogoLeftAligned />
          </NavLink>
        </div>

        {/* Link block (mobile: collapsible) */}
        <div
          className={cn(styles.linkContent, {
            [styles.menuOpen]: isMenuOpen,
          })}
        >
          <div className={styles.links}>
            <NavLink
              to="/"
              onClick={handleNavClick}
              className={({ isActive }) => (isActive ? styles.activeLink : "")}
            >
              Home
            </NavLink>

            <NavLink
              to="/theme"
              onClick={handleNavClick}
              className={({ isActive }) => (isActive ? styles.activeLink : "")}
            >
              Theme
            </NavLink>

            <NavLink
              reloadDocument
              to="/programme"
              onClick={handleNavClick}
              className={({ isActive }) => (isActive ? styles.activeLink : "")}
            >
              Programme
            </NavLink>

            {/* === DROPDOWN: INFORMATION === */}
            <div className={styles.dropdown}>
              <a
                type="button"
                className={styles.dropdownToggle}
                onClick={() => setIsInfoOpen((prev) => !prev)}
                aria-haspopup="true"
                aria-expanded={isInfoOpen}
              >
                Information
                <span className={styles.dropdownArrow} aria-hidden="true">
                  ▾
                </span>
              </a>

              <div
                className={cn(styles.dropdownMenu, {
                  [styles.dropdownOpen]: isInfoOpen,
                })}
              >
                {/* You can adjust these paths / labels to match your routes */}
                <NavLink
                  to="/information"
                  onClick={handleNavClick}
                  className={styles.dropdownLink}
                >
                  Useful Information
                </NavLink>
                <NavLink
                  to="/visa"
                  onClick={handleNavClick}
                  className={styles.dropdownLink}
                >
                  Visa
                </NavLink>
                <NavLink
                  to="/travel"
                  onClick={handleNavClick}
                  className={styles.dropdownLink}
                >
                  Travel
                </NavLink>
                <NavLink
                  to="/accommodation"
                  onClick={handleNavClick}
                  className={styles.dropdownLink}
                >
                  Accommodation
                </NavLink>

                <NavLink
                  to="/boycott-statement"
                  onClick={handleNavClick}
                  className={styles.dropdownLink}
                >
                  Academic boycott policy
                </NavLink>

                <NavLink
                  to="/scam-alert"
                  onClick={handleNavClick}
                  className={styles.dropdownLink}
                  style={{
                    display: "flex",
                    alignContent: "center",
                    gap: "4px",
                  }}
                >
                  <CampaignIcon fontSize="small" />
                  Phishing scam alert
                </NavLink>
              </div>
            </div>
            {/* === END DROPDOWN === */}

            <NavLink
              to={`/registration`}
              onClick={handleNavClick}
              className={({ isActive }) => (isActive ? styles.activeLink : "")}
            >
              Registration
            </NavLink>

            <NavLink
              to={`/organisers`}
              onClick={handleNavClick}
              className={({ isActive }) => (isActive ? styles.activeLink : "")}
            >
              Organisers
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
