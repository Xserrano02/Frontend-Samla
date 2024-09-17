import React, { useRef, useState, useContext } from 'react';
import Webcam from 'react-webcam';
import { PostUsers } from "../services/ApiServices.js";
import { FormContext } from '../context/FormContext.js';

function WebcamCapture({ onCapture, onClose }) {
  const webcamRef = useRef(null);
  const [capturedImage, setCapturedImage] = useState(null);
  const { formData, updateFormData } = useContext(FormContext)

  function capture() {
    if (webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot();
      setCapturedImage(imageSrc);

      updateFormData({ selfieFoto: imageSrc });
    }
  }

  function retakePhoto() {
    setCapturedImage(null);
  }

  async function handleSend() {
    if (onCapture) {
      onCapture(capturedImage);

      try {
        const result = await PostUsers(formData);
        console.log('Datos enviados:', result);
      } catch (error) {
        console.error('Error al enviar los datos:', error);
      }
    }
  }

  return (
    <div className="flex flex-col items-center">
      {!capturedImage ? (
        <>
          <Webcam
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            className="rounded-lg border-2 border-gray-300 mb-4"
          />
          <button onClick={capture} className="px-4 py-2 bg-orange-500 text-white rounded-md">
            Capturar foto
          </button>
        </>
      ) : (
        <>
          <img src={capturedImage} alt="Foto capturada" className="rounded-lg border-2 border-gray-300 mb-4" />
          <div className="flex space-x-4">
            <button onClick={retakePhoto} className="px-4 py-2 bg-gray-500 text-white rounded-md">
              Tomar de nuevo
            </button>
            <button onClick={handleSend} className="px-4 py-2 bg-green-500 text-white rounded-md">
              Usar esta foto
            </button>
          </div>
          <button onClick={onClose} className="px-4 py-2 bg-red-500 text-white rounded-md mt-4">
            Cerrar
          </button>
        </>
      )}
    </div>
  );
}

export default WebcamCapture;
