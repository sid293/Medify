// import logo from './logo.svg';
import Homepage from './pages/Homepage';
import './App.css';
import Offers from './pages/Offers';
import Specilization from './pages/Specilization';
import Specialist from './pages/Specialist'
import PatientCaring from './pages/PatientCaring'
import News from './pages/News'
import Families from './pages/Families'
import Faq from './pages/Faq'
import Footer from './pages/Footer'
import React from 'react'

function App() {
  return (
    <div className="App">
      <Homepage />
      <Offers />
      <Specilization />
      <Specialist />
      <PatientCaring />
      <News />
      <Families />
      <Faq />
      <Footer />
    </div>
  );
}

export default App;
