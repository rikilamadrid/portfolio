import React from 'react';

import {
  Header,
  About,
  Work,
  Skills,
  Testimonials,
  Footer,
} from './containers';

import {
  Navbar,
} from './components';

import './App.scss';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
