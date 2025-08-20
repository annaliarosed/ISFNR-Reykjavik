import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Programme = () => {
  const location = useLocation();

  useEffect(() => {
    const CONFERENCE_TAG = "isfnr2026";

    const isProgrammePage =
      location.hash === "#/programme" ||
      location.pathname.endsWith("/programme");

    if (!isProgrammePage) return;

    const sweetDivExists = document.getElementById("conference-sweet");
    if (sweetDivExists) return;

    // Inject the explorer container
    const sweetDiv = document.createElement("div");
    sweetDiv.id = "conference-sweet";
    sweetDiv.dataset.conference = CONFERENCE_TAG;
    sweetDiv.style.minHeight = "100vh";
    sweetDiv.innerHTML = "Loading conference panels…";

    const container = document.getElementById("react-minisite-wrapper");
    if (container) {
      container.appendChild(sweetDiv);
    }

    // Load the script only once
    const script = document.createElement("script");
    script.src = "https://nomadit.co.uk/conference/conference-page-loader.js";
    script.async = true;
    script.onload = () => {
      if (typeof window.SetupConferenceExplorer === "function") {
        window.SetupConferenceExplorer();
      } else {
        console.warn("SetupConferenceExplorer still missing");
      }
    };

    document.body.appendChild(script);

    // Optional: cleanup if user navigates away
    return () => {
      const div = document.getElementById("conference-sweet");
      if (div) div.remove();
    };
  }, [location]);

  return (
    <div id="react-minisite-wrapper">
      <h1>Programme</h1>
    </div>
  );
};

export default Programme;
