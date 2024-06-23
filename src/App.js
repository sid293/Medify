// import logo from './logo.svg';
import './App.css';
import React from 'react'
import Dashboard from "./pages/mainPages/Dashborad";
import HospitalsPage from "./pages/mainPages/HospitalsPage";
import MyBookings from "./pages/mainPages/MyBookings";
import { Route } from 'react-router-dom';
import { BrowserRouter, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      {/* <Dashboard />
      <HospitalsPage /> */}
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/hospitals" element={<HospitalsPage />} />
        <Route path="/MyBookings" element={<MyBookings />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
