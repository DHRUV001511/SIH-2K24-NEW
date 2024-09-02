import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Books from './components/BookSlider/Books';
import Testimonial from './components/Testimonial/Testimonial';
import Footer  from './components/Footer/Footer';

const App = () => {
  return (
    <section>
      <Navbar />
      <div style={{ backgroundColor: 'blue', height: '100vh', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <h1>Welcome to GranthSetu</h1>
      </div>
      <Books />
      <div style={{ backgroundColor: 'black', height: '100vh', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <h1>Welcome to GranthSetu</h1>
      </div>
      <div style={{ backgroundColor: 'green', height: '100vh', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <h1>Welcome to GranthSetu</h1>
      </div>
      <Testimonial />
      <Footer />
    </section>
  );
};

export default App;

