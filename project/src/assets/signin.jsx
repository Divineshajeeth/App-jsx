

import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import './signin.css';

function Signin() {
  const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const savedUser = JSON.parse(localStorage.getItem('registeredUser'));

    if (!savedUser) {
      alert('No user found, please sign up first.');
      return;
    }

    if (email === savedUser.email && password === savedUser.password) {
      localStorage.setItem('loggedInUser', JSON.stringify({ name: savedUser.name, email: savedUser.email }));
    
    } else {
      alert('Invalid email or Name');
    }



    navigate(`/home/${name}/${email}`);
  };

  return (
    <div className="login-container">
      <h1 className="app-title">AuthApp</h1>
      <p className="app-subtitle">Secure authentication with React Context</p>

      <div className="login-box">
        <h2 className="welcome">Welcome Back</h2>
        <p className="signin-text">Sign in to your account to continue</p>

        <form onSubmit={handleLogin}>
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            name='email'
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />

          <label>Name</label>
          <input
            type="name"
            placeholder="Enter your name"
            name='password'
            value={name}
            onChange={e => setName(e.target.value)}
            required
          />

          <button type="submit" className="signin-button" onClick={handleLogin}>Sign In</button>
        </form>

        <p className="signup-text">
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </div>
  );
}

export default Signin;
