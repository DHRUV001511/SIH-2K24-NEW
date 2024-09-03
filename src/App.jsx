import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Books from './components/BookSlider/Books';
import Books2 from './components/Books2/Books2';
import Testimonial from './components/Testimonial/Testimonial';
import Footer  from './components/Footer/Footer';
import AutoPanel from './components/AutoPanel/AutoPanel';
import Slider from './components/Slider/Slider'
import './stylese/custom-styles.css';



const App = () => {
  return (
    <section>
      <Navbar />
      <Slider />
      {/* <div style={{ backgroundColor: 'blue', height: '100vh', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <h1>Welcome to GranthSetu</h1>
      </div> */}
      <hr className="hr-13" />
      <Books />
      <hr className="hr-13" />
      <AutoPanel />
      <hr className="hr-13" />
      <Books2 />
      <hr className="hr-13" />
      <Testimonial />
      <hr className="hr-13" />
      <Footer />
    </section>
  );
};

export default App;

