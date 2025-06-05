import React from 'react';
import Header from './components/Header';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/main.css';

const App = () => (
  <>
    <Header />
    <main>
      <Services />
      <About />
      <Contact />
    </main>
    <Footer />
  </>
);

export default App;
