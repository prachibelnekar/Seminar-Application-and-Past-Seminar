import { useState } from 'react'
import Navbar from './Navbar.jsx';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import './App.css';
import Home from './Home.jsx';
import Past_seminar from './Past_seminar.jsx';
import Seminar_application from './Seminar_application.jsx';
import './index.css'; 
function App() {
  

  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/past_seminar" element={<Past_seminar/>} />
          <Route path="/seminar_application" element={<Seminar_application/>} />
          <Route path="*" element={<Home/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
