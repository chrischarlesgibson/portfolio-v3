import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import Home from "./Home";
import "./styles/global.css";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div>
        <Navbar />
        <Routes>
          <Route exact path="/Home" element={<Home />} />
          <Route exact path="/About" element={<About />} />
          <Route exact path="/Projects" element={<Projects />} />
          <Route exact path="/Resume" element={<Resume />} />
          <Route exact path="/Contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
