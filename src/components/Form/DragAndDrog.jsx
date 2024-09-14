import React from 'react';
import iconDrop from '../../Assets/images/iconDrop.png';
import Button from './Button'

const FileUpload = () => {
  return (
    <div className="mb-4 px-0 lg:px-10 mt-10 justify-center items-center py-36">
      <label className="block text-lg font-medium text-gray-800 mb-2">
        Fotografía de documento de identidad
      </label>
      <div className="border-2 border-dashed border-blue-500 rounded-lg p-4 flex flex-col items-center justify-center w-3/4 h-72  cursor-pointer">
        <img src={iconDrop} className="text-blue-500 text-6xl mb-4" alt="" />
        <p className="text-gray-600">Arrastrar aquí</p>
        <p className="text-gray-400">o</p>
        <input type="file" id="file-upload" onChange={console.log('imagen')} className="hidden" />
        <label
          htmlFor="file-upload"
          className="mt-2 px-6 py-2 text-sm font-medium text-gray-700 bg-white border rounded-md shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Seleccionar archivo
        </label>
      </div>

      <div className='flex flex-wrap flex-row-reverse pt-20 w-3/4 gap-x-4'>
        <Button children={'Siguiente'} className={'w-44  px-4 py-2 font-medium text-white bg-orange-500 rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500'} />
        <Button children={'Cancelar'} className={'w-44 px-4 py-2 font-medium text-white bg-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500'} />
      </div>
    </div>
  );
};

export default FileUpload;
