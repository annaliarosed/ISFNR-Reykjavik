import React, { useEffect } from "react";

const Programme = () => {
  useEffect(() => {
    if (window.NomadConferenceData) {
      document.getElementById("nomad-conference-wrapper").innerHTML =
        window.NomadConferenceData.shortcodeHtml;
    }
  }, []);

  return (
    <div>
      <div id="nomad-conference-wrapper"></div>
    </div>
  );
};

export default Programme;
