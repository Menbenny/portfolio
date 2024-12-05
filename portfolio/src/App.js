import React, { useEffect } from 'react';
import Preloader from '../src/components/Pre.js';
import  Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About'
import Projects from './components/Projects/Projects';
import Footer from './components/Footer.js'

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router=dom";
import ScrollToTop from './components/ScrollToTop.js';
import './style.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [load, updateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimer(() => {
      updateLoad(false);
    }, 1200);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className='App' id={load ? "no-scroll" : "scroll"}>
        <Navbar/>
        <ScrollToTop/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/projects" element={<Projects />}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/resume" element={<Resume/>}/>
          <Route path="*" element={<Navigate to="/"/>}/>
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;