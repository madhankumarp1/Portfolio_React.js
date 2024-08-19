import React from "react";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import SkillsSection from "./components/SkillsSection";
import ContactForm from './components/ContactForm';
import Footer from "./components/footer";
import "./CSS/body.css";
import "./CSS/style.css";
import "./CSS/navbar.css";
import "./CSS/Session4.css";
import "./CSS/Progressbar.css"; 
import "./CSS/ContactForm.css"; 
import "./CSS/Scrollbar.css"; 

function App() {
  return (
    <>
      <div className="main">
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <SkillsSection />
        <ContactForm />
        <Footer />
      </div>
    </>
  );
}

export default App;
