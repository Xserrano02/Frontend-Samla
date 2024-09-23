import React, { useContext, useState } from 'react';
import iconDrop from '../../Assets/images/iconDrop.png';
import Button from './Button';
import { FormContext } from '../../context/FormContext';
import ImagePreviewModal from '../../components/ImagePreviewModal';


const FileUpload = ({ onContinue }) => {
  const { formData, updateFormData } = useContext(FormContext);
  const [imageToPreview, setImageToPreview] = useState(null);
  const [currentImageType, setCurrentImageType] = useState('');
  const [dragActive, setDragActive] = useState(false);


  const handleFileChange = async (event) => {
    const file = event.target.files[0];

    if (file) {
        try {
            if (!file.type.startsWith('image/')) {
                throw new Error('El archivo no es una imagen.');
            }

            const img = new Image();
            const reader = new FileReader();

            reader.onload = (e) => {
                img.src = e.target.result;
                img.onload = () => {
                    const canvas = document.createElement('canvas');
                    const ctx = canvas.getContext('2d');

                    const maxWidth = 500;
                    const maxHeight = 500;
                    let width = img.width;
                    let height = img.height;

                    // Mantener la proporción de la imagen
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

                    if (!formData.documentoFotoFrontal) {
                        setCurrentImageType('frontal');
                    } else if (!formData.documentoFotoTrasera) {
                        setCurrentImageType('trasera');
                    }

                    setImageToPreview(optimizedBase64);
                };
            };

            reader.readAsDataURL(file);
        } catch (error) {
            console.error('Error al procesar la imagen:', error.message);
        }
    }
};

  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(true);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    const file = e.dataTransfer.files[0];
    if (file) {
      handleFileChange({ target: { files: [file] } });
    }
  };

  const handleConfirm = () => {
    if (currentImageType === 'frontal') {
      updateFormData({ documentoFotoFrontal: imageToPreview });
    } else if (currentImageType === 'trasera') {
      updateFormData({ documentoFotoTrasera: imageToPreview });
    }

    setImageToPreview(null);
    setCurrentImageType('');
  };

  const handleCancel = () => {
    setImageToPreview(null);
    setCurrentImageType('');
  };

  const isNextButtonDisabled = !formData.documentoFotoFrontal || !formData.documentoFotoTrasera;

  return (
    <div className="px-0 md:px-36 lg:px-10 mt-10 justify-center items-center py-0 md:pt-20">
      <label className="block text-lg font-medium text-gray-800 mb-10 md:mb-4 text-center md:text-left">
        Fotografía de documento de identidad
      </label>
      <div
        className={`border-2 border-dashed ${dragActive ? 'border-blue-500' : 'border-blue-300'} rounded-lg p-4 flex flex-col items-center justify-center w-80 mx-10 md:mx-0 h-96 md:h-72 md:w-3/4 cursor-pointer`}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        <img src={iconDrop} className="text-blue-500 text-6xl mb-4" alt="" />
        <p className="text-gray-600">Arrastrar aquí</p>
        <p className="text-gray-400">o</p>
        <input 
          type="file" 
          id="file-upload" 
          onChange={handleFileChange}  // Pasamos el evento completo
          className="hidden" 
          accept="image/*" 
        />
        <label
          htmlFor="file-upload"
          className="mt-2 px-6 py-2 text-sm font-medium text-gray-700 bg-white border rounded-md shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Seleccionar archivo
        </label>
      </div>

      {imageToPreview && (
        <ImagePreviewModal
          image={imageToPreview}
          onConfirm={handleConfirm}
          onCancel={handleCancel}
        />
      )}

      <div className='flex flex-wrap flex-row-reverse pt-20 w-80 md:w-3/4 gap-x-4 gap-y-4 mx-10 md:mx-0'>
        <Button 
          onClick={onContinue} 
          className={'w-full md:w-44 px-4 py-2 font-medium text-white bg-orange-500 rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500'} 
          disabled={isNextButtonDisabled}
        >
          Siguiente
        </Button>
        <Button 
          className={'w-full md:w-44 font-medium text-white bg-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500'} 
        >
          Cancelar
        </Button>
      </div>

      {isNextButtonDisabled && (
        <p className="text-red-500 text-center mt-4">Por favor, sube ambas imágenes antes de continuar.</p>
      )}
    </div>
  );
};

export default FileUpload;
