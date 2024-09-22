import React, { useState } from 'react';

const Inputs = ({ label, placeholder, name, value, onChange, required, type, setFieldError }) => {
    const [error, setError] = useState('');

    const handleValidation = (event) => {
        const { value } = event.target;

        if (required && !value) {
            setError(`${label} es obligatorio`);
            setFieldError(name, true);
        } else if (name === 'correo') {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                setError('Correo no tiene un formato válido');
                setFieldError(name, true);
            } else {
                setError('');
                setFieldError(name, false);
            }
        } else if (name === 'numeroIdentificacion') {
            const duiRegex = /^\d{8}-\d{1}$/;
            const nitRegex = /^\d{4}-\d{6}-\d{3}-\d{1}$/;
            const pasaporteRegex = /^[a-zA-Z]{1,}[a-zA-Z0-9]{4,8}$/;  // Ajuste: el pasaporte ahora debe empezar con una letra
            
            if (!duiRegex.test(value) && !nitRegex.test(value) && !pasaporteRegex.test(value)) {
                setError('Número de identificación no tiene un formato válido');
                setFieldError(name, true);
            } else {
                setError('');
                setFieldError(name, false);
            }
        } else {
            setError('');
            setFieldError(name, false);
        }

        onChange(event);
    };

    return (
        <div className="mb-2">
            <label htmlFor={name} className="block text-sm font-medium">{label}</label>
            <input
                type={type === 'number' ? 'text' : type}
                id={name}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={handleValidation}
                className={`w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 ${error ? 'border-red-500' : 'focus:ring-blue-500'}`}
            />
            {error && <span className="text-red-500 text-sm">{error}</span>}
        </div>
    );
};

export default Inputs;
