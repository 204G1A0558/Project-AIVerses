// import React, { useState } from 'react';
// import backgroundImage from './images/background.jpeg'; // Import the background image
// import './LoginScreen.css'; // Import CSS file for additional styling
// import { Link } from 'react-router-dom'; // Import Link for navigation

// const LoginScreen = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const handleLogin = () => {
//     // Add login logic here
//     if (!email || !password) {
//       setError('Please fill in all fields.');
//       return;
//     }
//     // Add further validation and login logic
//   };

//   return (
//     <div className="login-container" style={{ backgroundImage: `url(${backgroundImage})` }}>
//       <div className="login-box">
//         <div className="login-form">
//           <h2 className="login-heading">Login</h2>
//           {error && <p className="error-message">{error}</p>}
//           <div className="input-group">
//             <label>Email:</label>
//             <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
//           </div>
//           <div className="input-group">
//             <label>Password:</label>
//             <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
//           </div>
//           <button onClick={handleLogin}>Login</button>
//           <div className="forgot-password">
//             <a href="#">Forgot Password?</a>
//           </div>
//           <div className="signup-link">
//             Don't have an account? <Link to="/signup">Sign Up</Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginScreen;

import React, { useState } from 'react';
import backgroundImage from './images/background.jpeg'; // Import the background image
import './LoginScreen.css'; // Import CSS file for additional styling
import { Link, useNavigate } from 'react-router-dom'; // Import Link and useNavigate for navigation

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false); // State for the "Remember Me" checkbox
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleLogin = () => {
    // Add login logic here
    if (!email || !password) {
      setError('Please fill in all fields.');
      return;
    }
    // Add further validation and login logic
    
    // Navigate to the game page after successful login
    navigate('/game');
  };

  return (
    <div className="login-container" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="login-box">
        <div className="login-form">
          <h2 className="login-heading">Login</h2>
          {error && <p className="error-message">{error}</p>}
          <div className="input-group">
            <label>Email:</label>
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="input-group">
            <label>Password:</label>
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div className="input-group remember-me">
            <label>
              <input type="checkbox" checked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)} />
              Remember Me
            </label>
          </div>
          <button onClick={handleLogin} className="login-button">Login</button>
          <div className="forgot-password">
            <a href="#">Forgot Password?</a>
          </div>
          <div className="signup-link">
            Don't have an account? <Link to="/signup">Sign Up</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
