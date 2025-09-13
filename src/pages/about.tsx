import React from "react";
import "./about.css";

const About: React.FC = () => {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <p>
        Diese App wurde entwickelt, um Paare bei der Hochzeitsplanung zu unterstützen und passende Dienstleister zu finden.
        <br />
        Das Team besteht aus erfahrenen Entwicklern und Hochzeitsplanern, die ihre Leidenschaft für Organisation und Technik verbinden.
      </p>
      <p>
        Kontakt: info@hochzeitsapp.de
      </p>
    </div>
  );
};

export default About;
