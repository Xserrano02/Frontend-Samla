import React, { useContext } from 'react';
import { FormContext } from './FormContext';

const FormComponent = () => {
  const { formData } = useContext(FormContext);

  const handleSubmit = async () => {
    try {
      const response = await fetch('http://localhost:3002/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Error al enviar los datos');
      }

      const result = await response.json();
      console.log('Datos guardados:', result);
    } catch (error) {
      console.error('Error al enviar los datos:', error);
    }
  };

  return (
    <div>
      {/* Aquí puedes mostrar otros elementos de tu formulario */}
      <button onClick={handleSubmit} className="px-4 py-2 bg-blue-500 text-white rounded-md mt-4">
        Enviar
      </button>
    </div>
  );
};

export default FormComponent;
