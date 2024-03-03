import React, { useState } from 'react';
import backgroundImage from './images/background.jpeg'; // Import the background image
import './GameScreen.css'; // Import CSS file for additional styling

const GameScreen = () => {
  const [balloonSize, setBalloonSize] = useState(0);

  const pumpBalloon = () => {
    if (balloonSize >= 100) {
      // Balloon popped
      alert('Oops! The balloon popped!');
      setBalloonSize(0);
    } else {
      setBalloonSize(balloonSize + 20);
    }
  };

  return (
    <div className="game-container" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="game-content">
        <h2 className="game-heading">Game: Pump the Balloon</h2>
        <div className="balloon" style={{ height: `${balloonSize}px` }}></div>
        <button onClick={pumpBalloon} className="game-button">Pump Balloon</button>
      </div>
    </div>
  );
};

export default GameScreen;
