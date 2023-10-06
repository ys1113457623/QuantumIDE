import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Navbar } from '@components';
import descriptiveLogo from '@assets/logo/quantum-ide-descriptive.svg'

import './App.css'

const Home = () => <h1>Home</h1>;
const About = () => <h1>About</h1>;
const Contact = () => <h1>Contact</h1>;

const ImageComponent = () => {
  return(
    <img src={descriptiveLogo} alt='logo' className='quantum-ide-logo'></img>
  )
}

function App() {
  const links = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <Router>
      <Navbar links={links} leftComponent={<ImageComponent />}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  )
}

export default App
