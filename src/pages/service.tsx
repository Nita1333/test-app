import React from "react";
import "./service.css";

const Service: React.FC = () => {
  return (
    <div className="service-container">
      <h1>Dienstleistersuche</h1>
      <p>Hier findest du passende Dienstleister für deine Hochzeit. Die Seite kann später um Filter, Suchfunktion und Detailansichten erweitert werden.</p>
      <ul>
        <li>Fotografen</li>
        <li>Caterer</li>
        <li>Musik & DJs</li>
        <li>Floristen</li>
        <li>Locations</li>
      </ul>
    </div>
  );
};

export default Service;
