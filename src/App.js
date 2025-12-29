import "./App.css";
import "./globals.scss";

import React from "react";
import { Routes, Route } from "react-router-dom";
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
import Registration from "./components/Pages/Registration/Registration.jsx";
import Accommodation from "./components/Pages/Accommodation/Accommodation.jsx";
import Pay from "./components/Pages/Pay/Pay.jsx";
import PayThanks from "./components/Pages/PayThanks/PayThanks.jsx";
import PayFail from "./components/Pages/PayFail/PayFail.jsx";
import Visa from "./components/Pages/Visa/Visa.jsx";
import BoycottStatement from "./components/Pages/BoycottStatement/BoycottStatement.jsx";
import ScamAlert from "./components/Pages/ScamAlert/ScamAlert.jsx";
// import ScrollToTop from "./components/hooks/ScrollToTop.jsx";

function App() {
  // useEffect(() => {
  //   const hash = window.location.hash;

  //   // Only redirect if NOT on /programme and hash looks like a panel ID
  //   const isPanelHash = /^#\d+$/.test(hash);
  //   const onProgrammePage = location.pathname === "/programme";

  //   if (isPanelHash && !onProgrammePage) {
  //     navigate("/programme" + hash, { replace: true });
  //   }
  // }, [location]);

  return (
    <>
      {/* <ScrollToTop /> */}
      <div>
        <Layout>
          <NavBar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path={`/programme`} element={<Programme />} />
            <Route path={`/theme`} element={<Theme />} />
            <Route path={`/cfp`} element={<CallForProposals />} />
            <Route path={`/registration`} element={<Registration />} />
            <Route path={`/information`} element={<Information />} />
            <Route path={`/travel`} element={<Travel />} />
            <Route path={`/accommodation`} element={<Accommodation />} />
            <Route path={`/organisers`} element={<Organisers />} />
            <Route path={`/pay`} element={<Pay />} />
            <Route path={`/pay_thx`} element={<PayThanks />} />
            <Route path={`/pay_fail`} element={<PayFail />} />
            <Route path={`/visa`} element={<Visa />} />
            <Route path={`/boycott-statement`} element={<BoycottStatement />} />
            <Route path={`/scam-alert`} element={<ScamAlert />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
          <Footer />
        </Layout>
      </div>
    </>
  );
}

export default App;
