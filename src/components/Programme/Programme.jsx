import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import styles from "./Programme.module.scss";

const Programme = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const CONFERENCE_TAG = "isfnr2026";

    const sweetDiv = document.getElementById("conference-sweet");
    if (!sweetDiv) {
      console.warn("conference-sweet div not found");
      return;
    }

    // ✅ Set the conference tag dynamically if needed
    sweetDiv.dataset.conference = CONFERENCE_TAG;

    // ✅ Load the script if not already present
    if (!window.SetupConferenceExplorer) {
      const script = document.createElement("script");
      script.src = "https://nomadit.co.uk/conference/conference-page-loader.js";
      script.async = true;
      script.onload = () => {
        if (typeof window.SetupConferenceExplorer === "function") {
          window.SetupConferenceExplorer();
        } else {
          console.warn("SetupConferenceExplorer still missing after load");
        }
      };
      document.body.appendChild(script);
    } else {
      // Already loaded
      window.SetupConferenceExplorer();
    }

    return () => {
      // Optional cleanup
      const div = document.getElementById("conference-sweet");
      if (div) div.innerHTML = "";
    };
  }, [pathname]);

  return (
    <div className={styles.wrapper}>
      <div id="react-minisite-wrapper">
        <h1 className={styles.header}>Programme</h1>
        <div
          id="conference-sweet"
          data-conference="isfnr2026"
          style={{ minHeight: "100vh" }}
        >
          Loading conference panels…
        </div>
      </div>
    </div>
  );
};

export default Programme;
