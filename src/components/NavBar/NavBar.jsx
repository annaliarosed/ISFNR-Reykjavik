import React from "react";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.scss";
import cn from "classnames";

const NavBar = () => {
  return (
    <nav className={styles.wrapper}>
      <div className={styles.content}>
        <h1 className={styles.header}>ISFNR 2026 Reykjavík</h1>

        <div className={styles.linkContent}>
          <div className={cn(styles.links, styles.hidden)}>
            <Link to={`/`}>Home</Link>
            <Link to={"about"}>About</Link>
            <Link to={`contact`}>Contact</Link>
            <Link to={`programme`}>Programme</Link>
          </div>

          <div className={styles.loginWrapper}>
            {/* External Nomad login button */}
            <a
              data-organisationid="4"
              data-organisation="isfnr2026"
              href="https://nomadit.co.uk/account/contact"
              className="login-button"
              accessKey="3"
              target="_blank"
              rel="noopener noreferrer"
              title="Login"
            >
              <i className="fas fa-user"></i> <span>Login</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
