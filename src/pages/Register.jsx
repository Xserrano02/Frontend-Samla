import React from 'react';
import BackgroundImage from '../Assets/images/Background-Register.png';
import Imagen1 from '../Assets/images/Imagen 1.png';
import Form from '../components/Form/Form';
import icon from '../Assets/Icons/Icon-register.svg';
import '../Assets/styles/register.css';

function Register() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      <section className="relative w-full lg:w-1/2 h-60 lg:h-screen">
        <img className="register-background w-full h-60 lg:h-full object-cover" src={BackgroundImage} alt="" />

        <div className="hidden lg:block absolute inset-0 flex justify-center items-center">
          <img className="register-ImageFamily w-1/2 h-auto" src={Imagen1} alt="" />
        </div>

        <div className="hidden lg:block absolute top-4 left-4 bg-white p-2 rounded-full shadow-lg">
          <img src={icon} alt="Icono" className="w-8 h-8" />
        </div>

        <div className="block lg:hidden flex justify-center items-center mt-4">
          <img className="register-ImageFamily w-2/3 h-auto" src={Imagen1} alt="" />
        </div>
      </section>

      <section className="w-full lg:w-1/2 h-auto lg:h-screen p-4 lg:p-8 bg-white flex items-start">
        <Form />
      </section>
    </div>
  );
}

export default Register;
