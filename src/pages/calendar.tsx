import React, { useState } from "react";
import "./calendar.css";

interface Event {
  date: string;
  title: string;
}

const Calendar: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [newEvent, setNewEvent] = useState<Event>({ date: "", title: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewEvent({ ...newEvent, [e.target.name]: e.target.value });
  };

  const handleAddEvent = (e: React.FormEvent) => {
    e.preventDefault();
    if (newEvent.date && newEvent.title) {
      setEvents([...events, newEvent]);
      setNewEvent({ date: "", title: "" });
    }
  };

  return (
    <div className="calendar-container">
      <h1>Kalender & Reminder</h1>
      <form onSubmit={handleAddEvent} className="calendar-form">
        <input
          type="date"
          name="date"
          value={newEvent.date}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="title"
          value={newEvent.title}
          onChange={handleChange}
          placeholder="Termin oder Erinnerung"
          required
        />
        <button type="submit">Hinzufügen</button>
      </form>
      <ul className="calendar-list">
        {events.length === 0 ? (
          <li>Keine Termine eingetragen.</li>
        ) : (
          events.map((event, idx) => (
            <li key={idx}>
              <strong>{event.date}:</strong> {event.title}
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default Calendar;
