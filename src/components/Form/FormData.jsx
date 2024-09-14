import React from 'react';
import InputSelect from './InputSelect'

function FormData() {
  return (
    <div>
      <div class="mb-6 text-center">
        <h1 class="px-4 lg:px-40 text-4xl font-bold text-left">
          <span class="text-black ">Sam</span><span class="text-blue-500">la</span>
        </h1>
        <h2 class="px-4 lg:px-40 mt-2 text-xl font-semibold text-gray-800 text-left">Registro</h2>
      </div>
      <form className='px-4 lg:px-40'>

        <InputSelect
          label="Departamento"
        />

        <InputSelect
          label="Municipio"
        />

        <InputSelect
          label="Direccion"
        />

        <div class="mb-4">
          <label for="numero-id" class="block text-sm font-medium text-gray-700">Número de identificación</label>
          <input type="text" id="numero-id" placeholder="0000-0" class="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>

      </form>
    </div>

  );
}

export default FormData;