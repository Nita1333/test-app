import React from 'react';
import Countdown from './components/Countdown';
import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <p>
          Willkommen zur Hochzeitsplanung!
        </p>
        <Countdown />
      </header>
  
    </div>
  );
}

export default App;
