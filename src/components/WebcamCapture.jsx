import React, { useRef, useState, useContext } from 'react';
import Webcam from 'react-webcam';
import { PostUsers } from "../services/ApiServices.js";
import { FormContext } from '../context/FormContext.js';

function WebcamCapture({ onCapture, onClose, navigate }) {
  const webcamRef = useRef(null);
  const [capturedImage, setCapturedImage] = useState(null);
  const { formData, updateFormData } = useContext(FormContext);

  async function capture() {
    if (webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot(); // Captura la imagen en base64

      // Convierte el base64 a imagen HTML
      const img = new Image();
      img.src = imageSrc;
      
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');

        const maxWidth = 500;
        const maxHeight = 500;
        let width = img.width;
        let height = img.height;

        if (width > height) {
          if (width > maxWidth) {
            height = Math.round((height * maxWidth) / width);
            width = maxWidth;
          }
        } else {
          if (height > maxHeight) {
            width = Math.round((width * maxHeight) / height);
            height = maxHeight;
          }
        }

        canvas.width = width;
        canvas.height = height;

        ctx.drawImage(img, 0, 0, width, height);

        const optimizedBase64 = canvas.toDataURL('image/jpeg', 0.7);

        setCapturedImage(optimizedBase64);

        updateFormData({ selfieFoto: optimizedBase64 });
      };
    }
  }

  async function handleSend() {
    try {
      const result = await PostUsers(formData);
      console.log('Datos enviados:', result);
      navigate();
    } catch (error) {
      console.error('Error al enviar los datos:', error);
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
            videoConstraints={{
              facingMode: "user"
            }}
          />
          <button onClick={capture} className="px-4 py-2 bg-orange-500 text-white rounded-md">
            Capturar foto
          </button>
        </>
      ) : (
        <>
          <img src={capturedImage} alt="Foto capturada" className="rounded-lg border-2 border-gray-300 mb-4" />
          <div className="flex space-x-4">
            <button onClick={() => setCapturedImage(null)} className="px-4 py-2 bg-gray-500 text-white rounded-md">
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
