import React, { useState } from "react";
import "./profile.css";

const Profile: React.FC = () => {
  const [names, setNames] = useState({ partner1: "", partner2: "" });
  const [weddingDate, setWeddingDate] = useState("");
  const [notes, setNotes] = useState("");

  return (
    <div className="profile-container">
      <h1>Profil des Paares</h1>
      <form>
        <label>
          Name Partner 1:
          <input
            type="text"
            value={names.partner1}
            onChange={e => setNames({ ...names, partner1: e.target.value })}
            placeholder="Vorname Partner 1"
          />
        </label>
        <br />
        <label>
          Name Partner 2:
          <input
            type="text"
            value={names.partner2}
            onChange={e => setNames({ ...names, partner2: e.target.value })}
            placeholder="Vorname Partner 2"
          />
        </label>
        <br />
        <label>
          Hochzeitsdatum:
          <input
            type="date"
            value={weddingDate}
            onChange={e => setWeddingDate(e.target.value)}
          />
        </label>
        <br />
        <label>
          Notizen:
          <textarea
            value={notes}
            onChange={e => setNotes(e.target.value)}
            placeholder="Besondere Wünsche, Hinweise ..."
          />
        </label>
      </form>
    </div>
  );
};

export default Profile;
