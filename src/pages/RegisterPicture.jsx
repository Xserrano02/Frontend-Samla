import React from 'react';
import FormData from '../components/Form/FormData';
import DragAndDrog from '../components/Form/DragAndDrog';
import arrow from '../Assets/images/arrow.png'
import { useNavigate } from 'react-router-dom';

function RegisterPicture() {

  const navigate = useNavigate()

  const handleNavigate = () =>{
    navigate('/selfie')

  }

  return (
    <div className="flex flex-col md:flex-row w-full ounded-tl-lg rounded-tr-lg mt-8">

      
      <button className='absolute md:hidden top-16'>
      <img src={arrow} alt='' className='w-10 md:'/>
      </button>
      
      <section className="w-full md:w-1/2 h-full md:h-screen bg-white">
        <FormData />
      </section>

      <section className="w-full md:w-1/2 h-full md:h-screen bg-white">
        <DragAndDrog onContinue={handleNavigate}/>
      </section>

    </div>
  );
}

export default RegisterPicture;
