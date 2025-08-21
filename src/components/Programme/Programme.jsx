import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import styles from "./Programme.module.scss";

const Programme = () => {
  const { pathname } = useLocation();
  const newsRef = useRef(null);

  useEffect(() => {
    const CONFERENCE_TAG = "isfnr2026";

    const wrapper = document.getElementById("react-minisite-wrapper");
    if (!wrapper) return;

    // ✅ Inject conference-sweet div
    let sweetDiv = document.getElementById("conference-sweet");
    if (!sweetDiv) {
      sweetDiv = document.createElement("div");
      sweetDiv.id = "conference-sweet";
      sweetDiv.style.minHeight = "100vh";
      sweetDiv.innerHTML = "Loading conference panels…";
      wrapper.appendChild(sweetDiv);
    }
    sweetDiv.dataset.conference = CONFERENCE_TAG;

    // ✅ Inject conference-news div (before the sweet div)
    let newsDiv = wrapper.querySelector(".conference-news");
    if (!newsDiv) {
      newsDiv = document.createElement("div");
      newsDiv.className = "conference-news";
      newsDiv.dataset.newsServiceUrl =
        "https://nomadit.co.uk/conference/isfnr2026/news/page/none";
      newsDiv.innerHTML = "Loading news…";
      wrapper.insertBefore(newsDiv, sweetDiv);
    }

    const initNomadScripts = () => {
      if (typeof window.SetupConferenceExplorer === "function") {
        window.SetupConferenceExplorer();
      }

      if (typeof window.SetupConferenceNews === "function") {
        window.SetupConferenceNews();
      } else {
        // Retry once more after short delay
        setTimeout(() => {
          if (typeof window.SetupConferenceNews === "function") {
            window.SetupConferenceNews();
          } else {
            console.warn("SetupConferenceNews still not available after retry");
          }
        }, 500);
      }
    };

    // Load script if not already present
    if (!window.SetupConferenceExplorer || !window.SetupConferenceNews) {
      const script = document.createElement("script");
      script.src = "https://nomadit.co.uk/conference/conference-page-loader.js";
      script.async = true;
      script.onload = initNomadScripts;
      document.body.appendChild(script);
    } else {
      initNomadScripts();
    }

    return () => {
      if (sweetDiv) sweetDiv.innerHTML = "";
      if (newsDiv) newsDiv.innerHTML = "";
    };
  }, [pathname]);

  return (
    <div className={styles.wrapper}>
      <div id="react-minisite-wrapper">
        <h1 className={styles.header}>Programme</h1>

        {/* News block */}
        <div
          className="conference-news"
          ref={newsRef}
          data-news-service-url="https://nomadit.co.uk/conference/isfnr2026/news/page/none"
        ></div>

        {/* Explorer block */}
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
