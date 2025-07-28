import "./App.css";
import "./globals.scss";

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar.jsx";
import Programme from "./components/Programme/Programme.jsx";
import HomePage from "./components/Pages/HomePage/HomePage.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Layout from "./components/Layout/Layout.jsx";
import Theme from "./components/Pages/Theme/Theme.jsx";

function About() {
  return (
    <div>
      <h2>About</h2>
      <p>This is the about page.</p>
    </div>
  );
}

function Contact() {
  return (
    <div>
      <h2>Contact</h2>
      <p>Contact info here.</p>
    </div>
  );
}

function App() {
  const basePath = "/we-meet-across-the-world/reykjavik-iceland";

  return (
    <>
      {/* TODO: put correct basename in for it */}
      <Router basename={basePath}>
        <div>
          <Layout>
            <NavBar />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/programme" element={<Programme />} />
              <Route path="/theme" element={<Theme />} />
            </Routes>
            <Footer />
          </Layout>
        </div>
      </Router>
    </>
  );
}

export default App;
