import React from 'react';
import FormData from '../components/Form/FormData';
import DragAndDrog from '../components/Form/DragAndDrog';

function RegisterPicture() {
  return (
    <div className="flex flex-wrap w-ful mt-10 rounded-tl-lg rounded-tr-lg">

      <section className='w-1/2 h-screen bg-white'>
        <FormData/>
      </section>

      <section className='w-1/2 h-screen bg-white'>
        <DragAndDrog/>
      </section>

    </div>
  );
}

export default RegisterPicture;
