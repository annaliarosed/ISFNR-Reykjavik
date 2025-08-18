import React from "react";
import styles from "./Footer.module.scss";
import { images } from "../../imageAssets";

const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.itemsWrapper}>
          <div className={styles.footerItem}>
            Conference contact:{" "}
            <a href="mailto:isfnr2026@nomadit.co.uk">
              isfnr2026(at)nomadit.co.uk
            </a>
          </div>

          <div className={styles.flyerWrapper}>
            <div
              style={{
                backgroundImage: `url(${images.flyer})`,
              }}
              className={styles.img}
            />
            <p className={styles.credit}>
              Logo and design by: <br />
              <a
                href="https://www.napiorkowski.xyz/"
                target="_blank"
                rel="noreferrer"
              >
                Ada Napiórkowski
              </a>
            </p>
          </div>
        </div>
        <div className={styles.backgroundImg} />
      </div>
    </div>
  );
};

export default Footer;
