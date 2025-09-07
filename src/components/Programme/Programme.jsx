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

    // Inject `.conference-news` BEFORE loading the script
    let newsDiv = document.querySelector(".conference-news");
    if (!newsDiv) {
      newsDiv = document.createElement("div");
      newsDiv.className = "conference-news";
      newsDiv.dataset.newsServiceUrl =
        "https://nomadit.co.uk/conference/isfnr2026/news/page/none";
      newsDiv.innerHTML = "Loading news…";
      wrapper.insertBefore(newsDiv, sweetDiv);
    }

    // ✅ Setup scripts after ensuring both JS files are loaded
    const initNomadScripts = () => {
      if (typeof window.SetupConferenceExplorer === "function") {
        window.SetupConferenceExplorer();
      }

      // Wait until SetupConferenceNews is available (retry every 300ms, up to 5s)
      let attempts = 0;
      const maxAttempts = 5000 / 300;

      const trySetupNews = () => {
        if (typeof window.SetupConferenceNews === "function") {
          window.SetupConferenceNews();
          clearInterval(newsRetryInterval);
        } else {
          attempts++;
          if (attempts > maxAttempts) {
            console.warn("❌ SetupConferenceNews still not available after 5s");
            clearInterval(newsRetryInterval);
          }
        }
      };

      const newsRetryInterval = setInterval(trySetupNews, 300);
    };

    const loadScripts = () => {
      const existingAll = document.querySelector(
        'script[src="https://nomadit.co.uk/conference/js/all.js"]'
      );
      const existingLoader = document.querySelector(
        'script[src="https://nomadit.co.uk/conference/conference-page-loader.js"]'
      );

      if (!existingAll) {
        const allScript = document.createElement("script");
        allScript.src = "https://nomadit.co.uk/conference/js/all.js";
        allScript.async = true;
        allScript.onload = () => {
          if (!existingLoader) {
            const loaderScript = document.createElement("script");
            loaderScript.src =
              "https://nomadit.co.uk/conference/conference-page-loader.js";
            loaderScript.async = true;
            loaderScript.onload = initNomadScripts;
            document.body.appendChild(loaderScript);
          } else {
            initNomadScripts();
          }
        };
        document.body.appendChild(allScript);
      } else if (!existingLoader) {
        const loaderScript = document.createElement("script");
        loaderScript.src =
          "https://nomadit.co.uk/conference/conference-page-loader.js";
        loaderScript.async = true;
        loaderScript.onload = initNomadScripts;
        document.body.appendChild(loaderScript);
      } else {
        initNomadScripts();
      }
    };

    loadScripts();

    return () => {
      if (sweetDiv) sweetDiv.innerHTML = "";
      const newsDiv = document.querySelector(".conference-news");
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
          id="conference-news"
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
