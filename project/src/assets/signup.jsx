import { useState } from "react";
import { Link } from "react-router-dom"
import './signin.css';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('')
  const [name, setName] = useState('')

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('confirm :', confirm);
    console.log('Name: ', name);

  };

  return (
    <div className="login-container">
      <h1 className="app-title">AuthApp</h1>
      <p className="app-subtitle">Secure authentication with React Context</p>

      <div className="login-box">
        <h2 className="welcome">Welcome Back</h2>
        <p className="signin-text">Sign Up to your account to continue</p>

        <form onSubmit={handleLogin}>

          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label>Password</label>
          <input
            type="confirm"
            placeholder="Enter your confirm password"
            value={password}
            onChange={(e) => setConfirm(e.target.value)}
            required
          />


          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <label>Name</label>
          <input
            type="confirm"
            placeholder="Enter your conform password"
            value={confirm}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <button type="submit" className="signUp-button">Sign Up</button>

          <p className="signin-text">
            Don you have  account? <Link to="/signIn">Sign in</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Signup;










