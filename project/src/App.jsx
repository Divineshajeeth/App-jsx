
import {  Routes, Route } from 'react-router-dom';

import Signup from './assets/signup'

import Signin from './assets/signin';
import DetailPage from './assets/home';


function App() {

  return (
    
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/home/:name/:email/" element={<DetailPage />} />
        <Route path="/" element={<Signin />} />
      </Routes>
    
  );
}

export default App;



