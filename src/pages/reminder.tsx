import React from "react";
import "./reminder.css";

const Reminder: React.FC = () => {
  return (
    <div className="reminder-container">
      <h1>Erinnerungen & Sharing</h1>
      <p>Hier kannst du besondere Momente deiner Hochzeit als Bilder und Videos festhalten und mit anderen teilen.</p>
      <div className="sharing-section">
        <h2>Rückblick & Teilen</h2>
        <p>Lade Fotos und Videos hoch und teile sie mit euren Gästen. So bleibt eure Hochzeit für alle unvergesslich!</p>
        <div className="media-preview">
          <div className="media-item">Video 1 (Platzhalter)</div>
          <div className="media-item">Bild 1 (Platzhalter)</div>
        </div>
      </div>
    </div>
  );
};

export default Reminder;
