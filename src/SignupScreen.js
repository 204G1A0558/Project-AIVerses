import React, { useState } from 'react';
import backgroundImage from './images/background.jpeg'; // Import the background image
import './SignupScreen.css'; // Import CSS file for additional styling
import { Link } from 'react-router-dom'; // Import Link for navigation

const SignupScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignup = () => {
    // Add signup logic here
    if (!email || !password) {
      setError('Please fill in all fields.');
      return;
    }
    // Add further validation and signup logic
  };

  return (
    <div className="signup-container" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="signup-box">
        <div className="signup-form">
          <h2 className="signup-heading">Sign Up</h2>
          {error && <p className="error-message">{error}</p>}
          <div className="input-group">
            <label>Email:</label>
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="input-group">
            <label>Password:</label>
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button onClick={handleSignup}>Sign Up</button>
          <div className="login-link">
            Already have an account? <Link to="/">Login</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupScreen;
