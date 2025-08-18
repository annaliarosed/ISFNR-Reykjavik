import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import styles from "./NavBar.module.scss";
import cn from "classnames";
import LogoLeftAligned from "../icons/LogoLeftAligned";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
          onClick={() => setIsMenuOpen(false)}
        >
          <i className="fas fa-user"></i> <span>Login</span>
        </a>
      </div>
      {/* Hamburger icon - shown on mobile */}
      <button
        className={styles.hamburger}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle navigation menu"
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
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) => (isActive ? styles.activeLink : "")}
            >
              Home
            </NavLink>
            <NavLink
              to="/theme"
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) => (isActive ? styles.activeLink : "")}
            >
              Theme
            </NavLink>
            <NavLink
              to={`/cfp`}
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) => (isActive ? styles.activeLink : "")}
            >
              Call for Proposals
            </NavLink>
            <NavLink
              to={`/organisers`}
              onClick={() => setIsMenuOpen(false)}
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
