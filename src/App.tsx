import React from 'react';
import Countdown from './components/Countdown';
import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
  <Countdown />
        <p>
          Willkommen zur Hochzeitsplanung!
        </p>
      </header>
    </div>
  );
}

export default App;
