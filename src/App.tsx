import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Profile from './pages/profile';
import Countdown from './components/Countdown';
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
                Willkommen zur Hochzeitsplanung!
              </p>
              <Countdown />
            </header>
          } />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
