import React, { useContext, useEffect } from 'react';
// import { FormContext } from '../context/FormContext';
// import { GetUsers } from '../services/ApiServices';

const Registrations = () => {
  // const { formData,updateFormData } = useContext(FormContext);

  // useEffect(() => {
  //   GetUsers(updateFormData);
  // }, []);

  // console.log('Datos recibidos: ',formData)

  return (
    <div className="pt-4">
      <h1 className="text-2xl font-bold  text-white ml-4 mb-4"> Samla</h1>
      <div className="overflow-x-auto bg-white h-screen">
        <h2 className='text-2xl font-bold py-10 mx-28'>Historial de registros</h2>
        <table className="min-w-[82%] bg-white border border-gray-20 mx-28">
          <thead>
            <tr>
              <th className="px-4 py-2 border-b">Nombres y apellidos</th>
              <th className="px-4 py-2 border-b">Correo electrónico</th>
              <th className="px-4 py-2 border-b">Número telefónico</th>
              <th className="px-4 py-2 border-b">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {/* {formData.usuarios && formData.usuarios.length > 0 ? (
              formData.usuarios.map((usuario, index) => (
                <tr key={index} className="hover:bg-gray-100">
                  <td className="px-4 py-2 border-b">{usuario.nombres}</td>
                  <td className="px-4 py-2 border-b">{usuario.correo}</td>
                  <td className="px-4 py-2 border-b">{usuario.telefono}</td>
                  <td className="px-4 py-2 border-b text-blue-500 cursor-pointer">
                    Ver detalle
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="px-4 py-2 border-b text-center">
                  No hay registros disponibles
                </td>
              </tr>
            )} */}
          </tbody>
        </table>
        <div className="flex justify-between items-center mt-4">
          <button className="px-4 py-2 text-blue-500">Anterior</button>
          <div className="space-x-2">
            <button className="px-2 py-1 border border-gray-200">1</button>
            <span>...</span>
            <button className="px-2 py-1 border border-gray-200">9</button>
            <button className="px-2 py-1 border border-gray-200">10</button>
          </div>
          <button className="px-4 py-2 text-blue-500">Siguiente</button>
        </div>
      </div>
    </div>
  );
};

export default Registrations;
