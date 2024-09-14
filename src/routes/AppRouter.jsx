import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from '../pages/Register';
import Registrations from '../pages/Registrations';
import RegisterPicture from '../pages/RegisterPicture';


const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/registrations" element={<Registrations />} />
        <Route path="/data" element={<RegisterPicture />} />
        <Route path="/registrations" element={<Registrations />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
