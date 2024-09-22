import React from 'react';

const ImagePreviewModal = ({ image, onConfirm, onCancel }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-11/12 max-w-lg relative">
        <button className="absolute top-2 right-2 text-gray-500" onClick={onCancel}>✕</button>
        <h2 className="text-xl font-bold mb-4">Vista previa de la imagen</h2>
        <img src={image} alt="Vista previa" className="w-full h-auto object-cover mb-4" />
        <div className="flex justify-end space-x-4">
          <button className="px-4 py-2 bg-gray-500 text-white rounded-md" onClick={onCancel}>
            Cancelar
          </button>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md" onClick={onConfirm}>
            Confirmar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImagePreviewModal;
