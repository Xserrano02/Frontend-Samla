import React from 'react';
import iconDrop from '../../Assets/images/iconDrop.png';

const FileUpload = () => {
  return (
    <div className="mb-4 px-0 lg:px-0 mt-10">
      <label className="block text-lg font-medium text-gray-800 mb-2">
        Fotografía de documento de identidad
      </label>
      <div className="border-2 border-dashed border-blue-500 rounded-lg p-4 flex flex-col items-center justify-center w-full h-64  cursor-pointer">
        <img src={iconDrop} className="text-blue-500 text-6xl mb-4" alt="" />
        <p className="text-gray-600">Arrastrar aquí</p>
        <p className="text-gray-400">o</p>
        <input type="file" id="file-upload" className="hidden" />
        <label
          htmlFor="file-upload"
          className="mt-2 px-6 py-2 text-sm font-medium text-gray-700 bg-white border rounded-md shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Seleccionar archivo
        </label>
      </div>
    </div>
  );
};

export default FileUpload;
