import React, { useState } from 'react';
import { Link } from "react-router-dom"
import './signin.css';

function Signin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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

          <button type="submit" className="signin-button">Sign In</button>
        </form>

        <p className="signup-text">
          Don't have an account? <Link to="/Signup">SignUp</Link>
        </p>
      </div>
    </div>
  );
}

export default Signin;




// import React, { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import './signin.css';

// const SignIn = () => {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = (e) => {
//     e.preventDefault();

//     const storedUser = JSON.parse(localStorage.getItem("user"));
//     if (storedUser?.email === email && storedUser?.password === password) {
//       localStorage.setItem("loggedInUser", JSON.stringify(storedUser));
//       navigate("/home");
//     } else {
//       alert("Invalid email or password");
//     }
//   };

//   return (
//     <div className="login-container">
//       <h1 className="app-title">AuthApp</h1>
//       <p className="app-subtitle">Secure authentication with React Context</p>

//       <div className="login-box">
//         <h2 className="welcome">Welcome Back</h2>
//         <p className="signin-text">Sign in to your account to continue</p>


//         <div className="min-h-screen flex items-center justify-center">
//           <form onSubmit={handleLogin} className="bg-white p-6 rounded shadow w-96">
//             <h2 className="text-xl font-bold mb-4">Sign In</h2>

//             <input
//               type="email"
//               placeholder="Email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="border w-full p-2 mb-2"
//             />

//             <input
//               type="password"
//               placeholder="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="border w-full p-2 mb-2"
//             />

//             <button type="submit" className="bg-purple-500 w-full text-white p-2 rounded">
//               Sign In
//             </button>

//             <p className="text-center mt-4 text-sm">
//               Don't have an account? <Link to="/signup" className="text-blue-600 underline">Sign up</Link>
//             </p>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignIn;







// import { useState, useContext } from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import { UserContext } from '../userContext/context';
// import './SignIn.css';

// function Signin() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const { setUser } = useContext(UserContext);
//   const navigate = useNavigate();

//   const handleLogin = (e) => {
//     e.preventDefault();
//     const storedUser = JSON.parse(localStorage.getItem('user'));

//     if (storedUser && storedUser.email === email && password.length > 0) {
//       setUser(storedUser);
//       navigate('/home');
//     } else {
//       alert('Invalid email or password');
//     }
//   };

//   return (
//     <div className="form-container">
//       <form onSubmit={handleLogin}>
//         <h2>Sign In</h2>
//         <input type="email" placeholder="Email" onChange={e => setEmail(e.target.value)} required />
//         <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} required />
//         <button type="submit">Login</button>
//         <p>New here? <Link to="/signup">Sign Up</Link></p>
//       </form>
//     </div>
//   );
// }

// export default Signin;
