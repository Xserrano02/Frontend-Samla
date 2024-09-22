import React, { createContext, useState } from 'react';

export const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    usuarios: [], 
    nombres: '',
    apellidos: '',
    correo: '',
    telefono: '',
    tipoIdentificacion: '',
    numeroIdentificacion: '',
    departamento: '',
    municipio: '',
    direccion: '',
    ingresosMensuales: '',
    documentoFotoFrontal: null, 
    documentoFotoTrasera: null, 
    selfieFoto: null,
  });

  const updateFormData = (newData) => {
    setFormData((prevData) => ({
      ...prevData,
      ...newData,
    }));
  };

  console.log(formData);

  return (
    <FormContext.Provider value={{ formData, updateFormData }}>
      {children}
    </FormContext.Provider>
  );
};
