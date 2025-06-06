import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import QuickContact from './components/QuickContact';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/main.css';

const App = () => (
  <>
    <Navbar />
    <HeroSection />
    <main>
      <Services />
      <About />
      <Contact />
    </main>
    <Footer />
    <QuickContact />
  </>
);

export default App;
