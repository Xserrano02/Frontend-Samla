import React from 'react';
import FormData from '../components/Form/FormData';
import DragAndDrog from '../components/Form/DragAndDrog';

function RegisterPicture() {
  return (
    <div className="flex flex-col lg:flex-row h-screen">
      <section className="flex flex-col lg:flex-row w-full h-full">
        <section className="relative w-full lg:w-1/2 h-full p-4 lg:p-8">
          <FormData />
        </section>

        <section className="w-full lg:w-1/2 h-full p-4 lg:p-8 bg-white flex items-start">
          <DragAndDrog />
        </section>
      </section>
    </div>
  );
}

export default RegisterPicture;
