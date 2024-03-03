import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginScreen from './LoginScreen';
import SignupScreen from './SignupScreen';
import GameScreen from './GameScreen'; // Import the GameScreen component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginScreen />} />
        <Route path="/signup" element={<SignupScreen />} />
        <Route path="/game" element={<GameScreen />} /> {/* Route for the GameScreen component */}
      </Routes>
    </Router>
  );
}

export default App;
