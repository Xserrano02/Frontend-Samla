import React from 'react';
import Imagen1 from '../Assets/images/Imagen 1.png';
import Form from '../components/Form/Form';
// import icon from '../Assets/Icons/Icon-register.svg';
import '../Assets/styles/register.css';
import { useNavigate } from 'react-router-dom';




function Register() {

  const navigate = useNavigate();

  const handleContinue = () => {
    navigate('/data');
  };
  return (
    <section>
      <div className='flex flex-col md:flex-row w-full ounded-tl-lg rounded-tr-lg'> 
      <div className="flex justify-center items-center w-full md:w-1/2 h-[60vh] md:h-screen">
      <img  src={Imagen1} alt='' className='w-[70%] md:w-[60%]'/>
        </div>
        <div className='w-full md:w-1/2 md:min-h-screen px-0 md:px-[5%] pt-10 pb-10 md:pt-28 md:py-10 bg-white'>
          <Form handleContinue={handleContinue}/>
        </div>

      </div>
    </section>
  );
}

export default Register;
