import React from "react";
import "./About.css";
import AboutSection from "../pages/AboutSection";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div className="about-page" style={{ backgroundColor: "#022c22", minHeight: "100vh", color: "#fff" }}>
      <AboutSection fullPage={true} />
      <Footer />
    </div>
  );
};

export default About;