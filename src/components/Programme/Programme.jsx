// // import React from "react";

// // const Programme = () => {
// //   return (
// //     <div>
// //       <div style={{ height: "100vh" }}>
// //         <iframe
// //           src="https://nomadit.co.uk/conference/isfnr2026/explorer"
// //           style={{ width: "100%", height: "100%", border: "none" }}
// //           title="Conference Programme"
// //         />
// //       </div>
// //     </div>
// //   );
// // };

// // export default Programme;
// import React, { useEffect } from "react";

// const Programme = () => {
//   useEffect(() => {
//     const container = document.getElementById("react-minisite-wrapper");

//     if (!container) return;

//     // Remove old explorer if re-rendered
//     const oldExplorer = document.getElementById("conference-sweet");
//     if (oldExplorer) oldExplorer.remove();

//     // Create new explorer div
//     const sweetDiv = document.createElement("div");
//     sweetDiv.id = "conference-sweet";
//     sweetDiv.dataset.conference = "isfnr2026";
//     sweetDiv.style.minHeight = "100vh";
//     sweetDiv.innerHTML = "Loading conference panels ...";

//     container.appendChild(sweetDiv);

//     // Trigger setup
//     if (typeof window.SetupConferenceExplorer === "function") {
//       window.SetupConferenceExplorer();
//     } else {
//       console.warn("SetupConferenceExplorer is not defined");
//     }
//   }, []);

//   return (
//     <div id="react-minisite-wrapper">
//       <h1>Programme</h1>
//       {/* Explorer will be injected here */}
//     </div>
//   );
// };
import React, { useEffect } from "react";

const Programme = () => {
  useEffect(() => {
    const CONFERENCE_TAG = "isfnr2026";

    // Don’t reinject if already present
    if (document.getElementById("conference-sweet")) return;

    // Add the DOM element for the explorer
    const sweetDiv = document.createElement("div");
    sweetDiv.id = "conference-sweet";
    sweetDiv.dataset.conference = CONFERENCE_TAG;
    sweetDiv.style.minHeight = "100vh";
    sweetDiv.innerHTML = "Loading conference panels…";

    const container = document.getElementById("react-minisite-wrapper");
    if (container) container.appendChild(sweetDiv);

    // Inject the explorer script (must be this specific one!)
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
  }, []);

  return (
    <div id="react-minisite-wrapper">
      <h1>Programme</h1>
    </div>
  );
};

export default Programme;
