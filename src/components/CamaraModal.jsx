import React, { useContext } from 'react';
import WebcamCapture from '../components/WebcamCapture';
import { FormContext } from '../context/FormContext';

function CameraModal({ isOpen, onClose, navigate }) {
  const { updateFormData } = useContext(FormContext);

  function handleCapture(imageSrc) {
    updateFormData({ selfieFoto: imageSrc });
    onClose();
  }

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-md shadow-md w-11/12 md:w-1/2">
        <h2 className="text-xl font-bold mb-4">Tomar una selfie</h2>
        <WebcamCapture onCapture={handleCapture}  navigate={navigate}/>
      </div>
    </div>
  );
}

export default CameraModal;
