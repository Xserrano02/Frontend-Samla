import React from 'react';
import FormData from '../components/Form/FormData';
import DragAndDrog from '../components/Form/DragAndDrog';
import { useNavigate } from 'react-router-dom';
import BtnBack from '../components/BtnBack'

function RegisterPicture() {

  const navigate = useNavigate()

  const handleNavigate = () =>{
    navigate('/selfie')

  }


  return (
    <div className="md:min-h-screen  flex flex-col md:flex-row w-full ounded-tl-lg rounded-tr-lg mt-8">

      <BtnBack/>


      <section className="w-full md:w-1/2 h-full md:min-h-screen  bg-white">
        <FormData />
      </section>

      <section className="w-full md:w-1/2 h-full md:min-h-screen  bg-white">
        <DragAndDrog onContinue={handleNavigate}/>
      </section>

    </div>
  );
}

export default RegisterPicture;
