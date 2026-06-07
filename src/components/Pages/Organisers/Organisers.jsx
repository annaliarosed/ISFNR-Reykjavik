import React from "react";
import styles from "./Organisers.module.scss";
// import { images } from "../../../imageAssets";
// import uniLogo from "../../../images/uniLogo.png";
// import arniLogo from "../../../images/arniLogo.png";
// import isfnrLogo from "../../../images/isfnrLogo.png";
import cn from "classnames";
import UniLogo from "../../icons/UniLogo";
import EthnologyAssociationLogo from "../../icons/EthnologyAssociationLogo";
import ArniLogo from "../../icons/ArniLogo";
import NationalMuseumLogo from "../../icons/NationalMuseumLogo";
import ArtMuseumLogo from "../../icons/ArtMuseumLogo";
import NationalGalleryLogo from "../../icons/NationalGalleryLogo";
import CityMuseumLogo from "../../icons/CityMuseumLogo";
import IsfnrLogo from "../../icons/IsfnrLogo";

const Organisers = () => {
  return (
    <section className={styles.page}>
      <div className={styles.hero}>
        <h1>Organisers & Committees</h1>
        <p>ISFNR 2026 • Reykjavík, Iceland</p>
      </div>

      <div className={styles.institutions}>
        <h2>Host Institutions</h2>

        <p className={styles.text}>
          Department of Folkloristics/ethnology at the University of Iceland,
          the Icelandic Association of Ethnology and Folklore, and The Árni
          Magnússon Institute for Icelandic Studies
        </p>

        <div className={styles.logoGrid}>
          <div className={cn(styles.ethnologyLogo, styles.logo)}>
            <EthnologyAssociationLogo />
          </div>
          <div className={cn(styles.uniLogo, styles.logo)}>
            <UniLogo className={styles.logo} />
          </div>
          <div className={cn(styles.arniLogo, styles.logo)}>
            <ArniLogo className={styles.logo} />
          </div>
        </div>
      </div>

      <div className={styles.institutions}>
        <h2>Organising Institutions</h2>

        {/* <div className={styles.logoGrid}>
          <img src={uniLogo} alt="University of Iceland" />
          <img src={assocLogo} alt="Icelandic Folklore Association" />
          <img src={arniLogo} alt="Arni Magnusson Institute" />
          <img src={isfnrLogo} alt="ISFNR" />
        </div> */}
        <p className={styles.text}>
          Department of Folkloristics/Ethnology at the University of Iceland,
          the Icelandic Association of Ethnology and Folklore, and The Árni
          Magnússon Institute for Icelandic Studies.
        </p>

        <div>
          <p className={styles.text}>
            ISFNR – The International Society For Folk Narrative Research.
          </p>
          <div className={styles.isfnrLogo}>
            <IsfnrLogo />
          </div>
        </div>
      </div>

      <div className={styles.committees}>
        <div className={styles.committeeBlock}>
          <h3>Local Organising Committee</h3>
          <ul>
            <li>
              Dagrún Ósk Jónsdóttir – University of Iceland / Icelandic
              Association of Ethnology and Folklore
            </li>
            <li>Kristinn Schram – University of Iceland</li>
            <li>Rósa Þorsteinsdóttir – Árni Magnússon Institute</li>
          </ul>
        </div>

        <div className={styles.committeeBlock}>
          <h3>Academic Committee</h3>
          <ul>
            <li>Eva Þórdís Ebenezersdóttir – University of Iceland</li>
            <li>Felix Lummer – University of Iceland</li>
            <li>Júlíana Þóra Magnúsdóttir – University of Iceland</li>
            <li>Kristinn Schram – University of Iceland</li>
            <li>
              Dagrún Ósk Jónsdóttir – University of Iceland / Icelandic
              Association of Ethnology and Folklore
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.institutions}>
        <h2>Local Collaborators</h2>

        <p className={styles.text}>
          The National Museum, The Reykjavík art museum, The National Gallery
          and The City Museum
        </p>

        <div className={styles.logoGrid}>
          <div className={cn(styles.nationalMuseum, styles.logo)}>
            <NationalMuseumLogo />
          </div>
          <div className={cn(styles.artMuseum, styles.logo)}>
            <ArtMuseumLogo />
          </div>
          <div className={cn(styles.nationalGallery, styles.logo)}>
            <NationalGalleryLogo className={styles.logo} />
          </div>
          <div className={cn(styles.cityMuseum, styles.logo)}>
            <CityMuseumLogo className={styles.logo} />
          </div>
        </div>
      </div>

      <div className={styles.adminBlock}>
        <h3>Conference Administration</h3>
        <p>NomadIT</p>
      </div>
    </section>
  );
};

export default Organisers;
