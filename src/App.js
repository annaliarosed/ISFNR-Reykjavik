import "./App.css";
import "./globals.scss";

import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar.jsx";
import Programme from "./components/Programme/Programme.jsx";
import HomePage from "./components/Pages/HomePage/HomePage.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Layout from "./components/Layout/Layout.jsx";
import Theme from "./components/Pages/Theme/Theme.jsx";
import Information from "./components/Pages/Information/Information.jsx";
import CallForProposals from "./components/Pages/CallForProposals/CallForProposals.jsx";
import Travel from "./components/Pages/Travel/Travel.jsx";
import Organisers from "./components/Pages/Organisers/Organisers.jsx";
// import ScrollToTop from "./components/hooks/ScrollToTop.jsx";

function App() {
  const basePath = "/we-meet-across-the-world/reykjavik-iceland";

  return (
    <>
      <Router basename={basePath}>
        {/* <ScrollToTop /> */}
        <div>
          <Layout>
            <NavBar />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path={`/programme`} element={<Programme />} />
              <Route path={`/theme`} element={<Theme />} />
              <Route path={`/cfp`} element={<CallForProposals />} />
              <Route path={`/information`} element={<Information />} />
              <Route path={`/travel`} element={<Travel />} />
              <Route path={`/organisers`} element={<Organisers />} />
              <Route path="*" element={<HomePage />} />
            </Routes>
            <Footer />
          </Layout>
        </div>
      </Router>
    </>
  );
}

export default App;
