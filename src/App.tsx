import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Profile from './pages/profile';
import Service from './pages/service';
import About from './pages/about';
import Reminder from './pages/reminder';
import Calendar from './pages/calendar';
import Todo from './pages/todo';
import Ideen from './pages/ideen';
import Countdown from './components/Countdown';
import Dashboard from './components/Dashboard';
import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <header className="App-header">
              <p>
                Willkommen zu deiner Traumhochzeit!
              </p>
              <Countdown />
              <Dashboard />
            </header>
          } />
          <Route path="/profile" element={<Profile />} />
          <Route path="/service" element={<Service />} />
          <Route path="/about" element={<About />} />
          <Route path="/reminder" element={<Reminder />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/ideen" element={<Ideen />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
