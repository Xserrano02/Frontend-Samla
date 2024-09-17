import React, { useState } from 'react';

const InputSelect = ({ label, name, value, onChange, options = [], required }) => {
  const [error, setError] = useState('');

  const handleValidation = (event) => {
    const { value } = event.target;

    if (required && !value) {
      setError(`${label} es obligatorio`);
    } else {
      setError('');
    }

    onChange(event);
  };
  
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">{label}</label>
      <select
        id={name}
        name={name}
        value={value}
        onChange={handleValidation}
        className={`w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 ${error ? 'border-red-500' : 'focus:ring-blue-500'}`}
      >
        <option value="">Seleccionar</option>
        {options.map((option) => (
          <option key={option.id} value={option.id}>
            {option.nombre}
          </option>
        ))}
      </select>
      {error && <span className="text-red-500 text-sm">{error}</span>}
    </div>
  );
};

export default InputSelect;
