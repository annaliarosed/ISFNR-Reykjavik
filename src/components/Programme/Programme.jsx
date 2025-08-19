import React, { useEffect } from "react";

const Programme = () => {
  useEffect(() => {
    const wrapper = document.getElementById("nomad-conference-wrapper");

    if (window.NomadConferenceData?.shortcodeHtml && wrapper) {
      // Parse the injected HTML
      const tempDiv = document.createElement("div");
      tempDiv.innerHTML = window.NomadConferenceData.shortcodeHtml;

      Array.from(tempDiv.childNodes).forEach((node) => {
        if (node.tagName === "SCRIPT" && node.src) {
          const script = document.createElement("script");
          script.src = node.src;
          script.async = true;

          // Wait until it's loaded, then call the loader
          script.onload = () => {
            console.log("conference-page-loader.js loaded");
            if (typeof window.conferencePageLoader === "function") {
              window.conferencePageLoader();
            } else {
              console.error("conferencePageLoader still missing after load");
            }
          };

          script.onerror = () => {
            console.error("Failed to load conference-page-loader.js");
          };

          document.body.appendChild(script);
        } else {
          wrapper.appendChild(node);
        }
      });
    } else {
      console.warn("NomadConferenceData or wrapper missing");
    }
  }, []);

  return (
    <div>
      <h1>Programme</h1>
      <div id="nomad-conference-wrapper"></div>
    </div>
  );
};

export default Programme;
