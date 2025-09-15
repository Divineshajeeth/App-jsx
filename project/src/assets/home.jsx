

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (!storedUser) {
      navigate("/"); 
    } else {
      setUser(storedUser);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    navigate("/");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <h1 className="text-3xl font-bold mb-2">Welcome, {user.name}</h1>
      <p className="text-lg text-gray-700 mb-6">Email: {user.email}</p>

      <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded">
        Logout
      </button>
    </div>
  );
};

export default Home;





// import { useContext, useEffect } from 'react';
// import { UserContext } from '../userContext/context';
// import { useNavigate } from 'react-router-dom';
// import './Home.css';

// function Home() {
//   const { user, setUser } = useContext(UserContext);
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (!user) {
//       const stored = localStorage.getItem('user');
//       if (stored) {
//         setUser(JSON.parse(stored));
//       } else {
//         navigate('/');
//       }
//     }
//   }, [user, navigate, setUser]);

//   if (!user) return null;

//   return (
//     <div className="home-container">
//       <h2>Welcome, {user.name}!</h2>
//       <p>Your email: {user.email}</p>
//     </div>
//   );
// }

// export default Home;

