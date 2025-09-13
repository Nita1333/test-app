import React from "react";
import "./ideen.css";

const Ideen: React.FC = () => {
  return (
    <div className="ideen-container">
      <h1>Hochzeitsideen</h1>
      <p>Hier findest du Inspirationen für eure Hochzeit – wie in einem Social Feed!</p>
      <div className="ideen-feed">
        {/* Beispielhafte Posts */}
        <div className="ideen-post">
          <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80" alt="Deko Idee" />
          <div className="ideen-caption">Vintage Tischdeko mit Blumen</div>
        </div>
        <div className="ideen-post">
          <video controls width="100%">
            <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
            Dein Browser unterstützt kein Video.
          </video>
          <div className="ideen-caption">Tanzvideo für die Hochzeit</div>
        </div>
        <div className="ideen-post">
          <img src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80" alt="Kuchen Idee" />
          <div className="ideen-caption">Kreative Hochzeitstorte</div>
        </div>
      </div>
    </div>
  );
};

export default Ideen;
