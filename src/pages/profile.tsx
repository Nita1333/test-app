import React, { useState } from "react";
import "./profile.css";

const Profile: React.FC = () => {
  const [weddingDate, setWeddingDate] = useState(() => localStorage.getItem("weddingDate") || "");
  const [notes, setNotes] = useState("");

  return (
    <div className="profile-container">
      <h1>Profil des Paares</h1>
      <form>
        <label>
          Hochzeitsdatum:
          <input
            type="date"
            value={weddingDate}
            onChange={e => {
              setWeddingDate(e.target.value);
              localStorage.setItem("weddingDate", e.target.value);
            }}
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
