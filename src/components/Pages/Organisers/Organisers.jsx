import React from "react";
import styles from "./Organisers.module.scss";
// import { images } from "../../../imageAssets";
// import uniLogo from "../../../images/uniLogo.png";
// import arniLogo from "../../../images/arniLogo.png";
// import isfnrLogo from "../../../images/isfnrLogo.png";
// import cn from "classnames";

const Organisers = () => {
  return (
    <section className={styles.page}>
      <div className={styles.hero}>
        <h1>Organisers & Committees</h1>
        <p>ISFNR 2026 • Reykjavík, Iceland</p>
      </div>

      <div className={styles.institutions}>
        <h2>Host Institution</h2>

        <p className={styles.text}>
          Department of Folkloristics/ethnology at the University of Iceland,
          the Icelandic Association of Ethnology and Folklore and The Árni
          Magnússon Institute for Icelandic Studies
        </p>
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
        <p className={styles.text}>
          ISFNR – The International Society For Folk Narrative Research.
        </p>
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

      <div className={styles.adminBlock}>
        <h3>Conference Administration</h3>
        <p>NomadIT</p>
      </div>
    </section>
  );
};

export default Organisers;
