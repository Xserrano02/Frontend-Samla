import React from 'react';

const InputWithSelect = ({ label }) => {
  return (
    <div class="mb-4">
    <label for="tipo-id" class="block text-sm font-medium text-gray-700">{label}</label>
    <select id="tipo-id" class="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
      <option value="">Seleccionar</option>
    </select>
  </div>
  );
};

export default InputWithSelect;
