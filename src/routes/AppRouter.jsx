import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from '../pages/Register';
import Registrations from '../pages/Registrations';
import RegisterPicture from '../pages/RegisterPicture';
import RegisterSelfie from '../pages/RegisterSelfie';



const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/registrations" element={<Registrations />} />
        <Route path="/data" element={<RegisterPicture />} />
        <Route path="/selfie" element={<RegisterSelfie />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
