import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Bikes from './components/pages/Bikes';
import Trails from './components/pages/Trails';
import SignUp from './components/pages/SignUp';

function App() {
  return (
    <>
      <Router>
      <Navbar />
      <Routes>
        <Route path="/welcome" element={<Home />} />
        <Route path="/bikes" element={<Bikes />} />
        <Route path="/trails" element={<Trails />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
      </Router>
    </>
  );
}

export default App;
