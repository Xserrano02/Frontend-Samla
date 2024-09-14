import React from 'react';
import Imagen1 from '../Assets/images/Imagen 1.png';
import Form from '../components/Form/Form';
import icon from '../Assets/Icons/Icon-register.svg';
import '../Assets/styles/register.css';


function Register() {
  return (
    <section>
      <div className='flex flex-wrap'> 
        <div className=' flex justify-center items-center w-1/2 h-screen' >
          <img  src={Imagen1} alt='' style={{width:'60%'}}/>
        </div>
        <div className='w-1/2 h-screen py-28 bg-white'>
          <Form/>
        </div>

      </div>
    </section>
  );
}

export default Register;
