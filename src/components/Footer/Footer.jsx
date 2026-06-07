import React from "react";
import styles from "./Footer.module.scss";
import { images } from "../../imageAssets";
import NationalMuseumLogo from "../icons/NationalMuseumLogo";
import ArtMuseumLogo from "../icons/ArtMuseumLogo";
import NationalGalleryLogo from "../icons/NationalGalleryLogo";
import CityMuseumLogo from "../icons/CityMuseumLogo";
import EthnologyAssociationLogo from "../icons/EthnologyAssociationLogo";
import UniLogo from "../icons/UniLogo";
import ArniLogo from "../icons/ArniLogo";
import IsfnrLogo from "../icons/IsfnrLogo";

const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.itemsWrapper}>
          <div className={styles.logosWrapper}>
            <div className={styles.logoGrid}>
              <div className={styles.logo}>
                <EthnologyAssociationLogo />
              </div>
              <div className={styles.logo}>
                <UniLogo className={styles.logo} />
              </div>
              <div className={styles.logo}>
                <ArniLogo className={styles.logo} />
              </div>
              <div className={styles.logo}>
                <IsfnrLogo />
              </div>
              <div className={styles.logo}>
                <NationalMuseumLogo />
              </div>
              <div className={styles.logo}>
                <ArtMuseumLogo />
              </div>
              <div className={styles.logo}>
                <NationalGalleryLogo className={styles.logo} />
              </div>
              <div className={styles.logo}>
                <CityMuseumLogo className={styles.logo} />
              </div>
            </div>
            <div className={styles.footerItem}>
              <p>Conference contact: </p>
              <a href="mailto:isfnr2026@nomadit.co.uk">
                isfnr2026(at)nomadit.co.uk
              </a>
            </div>
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
