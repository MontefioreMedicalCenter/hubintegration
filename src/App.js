import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import montefioreImage from './assets/montefiore.png';

function App() {
  const [showWelcome, setShowWelcome] = useState(true);
  const [remainingTime, setRemainingTime] = useState(10);
  const [showMovingImage, setShowMovingImage] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 1);
    }, 1000);

    const timeout = setTimeout(() => {
      setShowWelcome(false);
      setShowMovingImage(true);
    }, 10000);

    return () => {
      clearInterval(timer);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {showWelcome && (
          <div>
            <h1>Welcome to Hub</h1>
            <p>This message will disappear in {remainingTime} seconds.</p>
          </div>
        )}
        <div className="image-container">
          <img src={montefioreImage} alt="Montefiore" className="montefiore-image moving" />
        </div>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
