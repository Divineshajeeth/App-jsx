

import React from 'react';
import Signin from './assets/signin';
import Signup from './assets/signup';
import Home from './assets/home';
import { Routes, Route } from 'react-router-dom';

function App() {
  
  return (
    <>      
    <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />

      </Routes>  
        </>
  )
}export default App;




// import React from 'react';
// import './App.css'
// import {  Routes, Route } from 'react-router-dom';
// import SignIn from './assets/signin';
// import SignUp from './assets/signup';
// import Home from './assets/home';
// import { UserProvider } from './userContext/context';

// function App() {
//   return (
//     <UserProvider>
//       <BrowserRouter>
//         <Routes>
//           <Route path="/signin" element={<SignIn />} />
//           <Route path="/signup" element={<SignUp />} />
//           <Route path="/home" element={<Home />} />
//         </Routes>
//       </BrowserRouter>
//     </UserProvider>
//   );
// }

// export default App;


