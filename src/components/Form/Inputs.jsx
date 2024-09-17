import React, { useState } from 'react';

const Inputs = ({ label, placeholder, name, value, onChange, required, type }) => {
    const [error, setError] = useState('');

    const handleValidation = (event) => {
        const { value } = event.target;

        if (required && !value) {
            setError(`${label} es obligatorio`);
        } else if (type === 'number' && isNaN(value)) {
            setError(`${label} debe ser un número válido`);
        } else if (type === 'text' && !/^[a-zA-Z\s]*$/.test(value)) {
            setError(`${label} solo debe contener letras`);
        } else {
            setError('');
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
