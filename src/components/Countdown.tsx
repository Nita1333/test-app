import React, { useState, useEffect } from "react";
import "./Countdown.css";

interface CountdownProps {
  // initialSeconds?: number;
}

  const Countdown: React.FC = () => {
  const [daysLeft, setDaysLeft] = useState<number | null>(null);
  useEffect(() => {
    const dateStr = localStorage.getItem("weddingDate");
    if (dateStr) {
      const weddingDate = new Date(dateStr);
      const today = new Date();
      const diff = Math.ceil((weddingDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
      setDaysLeft(diff >= 0 ? diff : 0);
    } else {
      setDaysLeft(null);
    }
  }, []);






  return (
    <div className="countdown-container" style={{ textAlign: "center" }}>
      {daysLeft !== null ? (
        <h2>Countdown: {daysLeft} Tage bis zur Hochzeit</h2>
      ) : (
        <h2>Bitte trage das Hochzeitsdatum im Profil ein.</h2>
      )}
    </div>
  );
};

export default Countdown;
