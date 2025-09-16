
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './signin.css';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();

    if (password !== confirm) {
      alert("Passwords do not match!");
      return;
    }

  
    const userData = { name, email, password };
    localStorage.setItem('registeredUser', JSON.stringify(userData));

    
    localStorage.setItem('loggedInUser', JSON.stringify({ name, email }));

  
    navigate(`/home/${name}/${email}`);
  };

  return (
    <div className="login-container">
      <h1 className="app-title">AuthApp</h1>
      <p className="app-subtitle">Secure authentication with React Context</p>

      <div className="login-box">
        <h2 className="welcome">Create an Account</h2>
        <p className="signin-text">Sign up to your account to continue</p>

        <form onSubmit={handleSignup}>
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />

          <label>Confirm Password</label>
          <input
            type="password"
            placeholder="Confirm your password"
            value={confirm}
            onChange={e => setConfirm(e.target.value)}
            required
          />

          <label>Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={e => setName(e.target.value)}
            required
          />

          <button type="submit"  className="signUp-button" onClick={handleSignup}>Sign Up</button>

          <p className="signin-text">
            Already have an account? <Link to="/signin">Sign in</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Signup;











