import React, { useContext, useState, useEffect } from 'react';
import { FormContext } from '../../context/FormContext';
import InputSelect from './InputSelect';
import { fetchUbicaciones } from '../../services/ApiServices.js';
import Inputs from './Inputs';
import logo from '../../Assets/images/logo.png';


function FormData() {
  const { formData, updateFormData } = useContext(FormContext);
  const [departamentos, setDepartamentos] = useState([]);
  const [filteredMunicipios, setFilteredMunicipios] = useState([]);
  const [fieldErrors, setFieldErrors] = useState({
    direccion: false,
    correo: false,
    numeroIdentificacion: false,
  });


  console.log(fieldErrors)
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

    if (name === 'departamento') {
      const selectedDepartamento = departamentos.find((dep) => dep.id === value);
      updateFormData({ departamento: selectedDepartamento ? selectedDepartamento.nombre : '' });
      setFilteredMunicipios(selectedDepartamento ? selectedDepartamento.municipios : []);
    } else if (name === 'municipio') {
      const selectedMunicipio = filteredMunicipios.find((mun) => mun.id_mun === value);
      updateFormData({ municipio: selectedMunicipio ? selectedMunicipio.nombre : '' });
    } else {
      updateFormData({ [name]: value });
    }
  }

  function setFieldError(fieldName, hasError) {
    setFieldErrors((prevErrors) => ({
      ...prevErrors,
      [fieldName]: hasError,
    }));
  }

  return (
    <div className=" md:min-h-screen md:pt-28 mt-24 md:mt-0">
      <img
        src={logo}
        alt="Logo"
        className="mb-8 w-24 absolute top-16 left-40 md:left-20 md:top-auto md:static md:ml-40"
      />

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
          setFieldError={setFieldError}
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
