import React, { useContext, useState, useEffect } from 'react';
import { FormContext } from '../../context/FormContext';
import InputSelect from './InputSelect';
// import logo from '../../Assets/images/logo.png';
import { fetchUbicaciones } from '../../services/ApiServices.js';
import Inputs from './Inputs'

function FormData() {
  const { formData, updateFormData } = useContext(FormContext);
  const [departamentos, setDepartamentos] = useState([]);
  const [filteredMunicipios, setFilteredMunicipios] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchUbicaciones();
        setDepartamentos(data);
      } catch (error) {
        console.error('Error al obtener datos:', error);
      }
    };

    fetchData();
  }, []);

  function handleChange(event) {
    const { name, value } = event.target;
    updateFormData({ [name]: value });

    if (name === 'departamento') {
      const selectedDepartamento = departamentos.find((dep) => dep.id === value);
      setFilteredMunicipios(selectedDepartamento ? selectedDepartamento.municipios : []);
    }
  }

  return (
    <div className="md:py-36">
      <h1 className="text-center md:text-left px-4 lg:px-40 text-4xl mt-8 md:mt-0 mb-8 md:mb-0">
        <span className="text-black">Sam</span><span className="text-blue-500">la</span>
      </h1>
      <h2 className="text-center px-4 lg:px-40 mt-2 text-xl font-semibold text-gray-800 md:text-left mb-8 md:mb-0">Datos de vivienda</h2>

      <form className="px-4 lg:px-40">
        <InputSelect
          label="Departamento"
          name="departamento"
          value={formData.departamento}
          onChange={handleChange}
          options={departamentos.map((dep) => ({ id: dep.id, nombre: dep.nombre }))}
          required={true}
        />

        <InputSelect
          label="Municipio"
          name="municipio"
          value={formData.municipio}
          onChange={handleChange}
          options={filteredMunicipios.map((mun) => ({ id: mun.id_mun, nombre: mun.nombre }))}
          required={true}

        />
        <Inputs
          label="Direccion"
          placeholder="123 street"
          name="direccion"
          value={formData.direccion}
          onChange={handleChange}
          required={true}

        />

        <div className="mb-4">
          <label htmlFor="ingresosMensuales" className="block text-sm font-medium text-gray-700">Ingresos mensuales</label>
          <input
            type="text"
            id="ingresosMensuales"
            name="ingresosMensuales"
            placeholder="0000-0"
            value={formData.ingresosMensuales}
            onChange={handleChange}
            className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
      </form>
    </div>
  );
}

export default FormData;
