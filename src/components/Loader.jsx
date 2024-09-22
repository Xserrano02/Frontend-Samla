import React from 'react';

const Loader = () => {
  return (
    <div className="text-center py-10">
      <div className="loader border-t-4 border-blue-500 rounded-full w-12 h-12 mx-auto animate-spin"></div>
      <p className="mt-4 text-gray-600">Cargando datos...</p>
    </div>
  );
};

export default Loader;
