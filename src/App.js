import './App.css';
import Hero from './components/Hero/Hero';
import Particle from './components/Particle';
// import {Row, Col, Container} from 'react-bootstrap'
import { useEffect } from 'react';
import AOS from 'aos';
import Skills from './components/Skills/Skills';

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
    <Skills/>
    </div>
    </div>
  );
}

export default App;
