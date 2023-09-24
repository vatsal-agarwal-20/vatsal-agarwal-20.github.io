import './App.css';
import Hero from './components/Hero/Hero';
import Particle from './components/Particle';
// import {Row, Col, Container} from 'react-bootstrap'
import { useEffect } from 'react';
import AOS from 'aos';
import Skills from './components/Skills/Skills';
import Projects from './components/Project/Projects';
import About from './components/Hero/About';
import ScrollToTop from "react-scroll-to-top";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className='App'>
      <div className='particles'>
    <Particle/>
    </div>
    <div className='content'>
    <Hero/>
    <About/>
    <Skills/>
    <Projects/>
    <ScrollToTop smooth color="#6f00ff" />
    <br/>
    </div>
    </div>
  );
}

export default App;
