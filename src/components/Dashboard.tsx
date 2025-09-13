import React from "react";
import { Link } from "react-router-dom";
import "./dashboard.css";

const Dashboard: React.FC = () => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-grid">
        <Link to="/reminder" className="dashboard-tile">
          <h2>Erinnerungen & Sharing</h2>
          <p>Teile Fotos und Videos eurer Hochzeit.</p>
        </Link>
        <Link to="/calendar" className="dashboard-tile">
          <h2>Kalender & Reminder</h2>
          <p>Alle wichtigen Termine im Überblick und Erinnerungen erhalten.</p>
        </Link>
        <Link to="/todo" className="dashboard-tile">
          <h2>To Do Liste</h2>
          <p>Behalte den Überblick über eure Aufgaben.</p>
        </Link>
        <Link to="/ideen" className="dashboard-tile">
          <h2>Hochzeitsideen</h2>
          <p>Inspirationen und Vorschläge für eure Feier.</p>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
