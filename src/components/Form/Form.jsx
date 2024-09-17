import React, { useContext, useState } from 'react';
import logo from '../../Assets/images/logo.png';
import Inputs from './Inputs';
import InputSelect from './InputSelect';
import { FormContext } from '../../context/FormContext';

function Form({ handleContinue }) {
    const { updateFormData } = useContext(FormContext);
    const [formData, setFormData] = useState({
        nombres: '',
        apellidos: '',
        correo: '',
        numeroIdentificacion: '',
        telefono: '',
        tipoIdentificacion: '',
    });
    const [errors, setErrors] = useState({});
    const [formError, setFormError] = useState(''); // Estado para el mensaje general de error

    function handleChange(event) {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    }

    function handleSubmit(event) {
        event.preventDefault();
        const newErrors = {};

        if (!formData.nombres) newErrors.nombres = true;
        if (!formData.apellidos) newErrors.apellidos = true;
        if (!formData.correo) newErrors.correo = true;
        if (!formData.numeroIdentificacion) newErrors.numeroIdentificacion = true;
        if (!formData.telefono) newErrors.telefono = true;
        if (!formData.tipoIdentificacion) newErrors.tipoIdentificacion = true;

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            setFormError(''); // No hay errores, limpiar el mensaje general de error
            updateFormData(formData);
            handleContinue();
        } else {
            setFormError('Necesita completar todos los campos para avanzar'); // Mostrar mensaje general de error
        }
    }

    return (
        <div className="mx-10 mt-0 md:mt-33 bg-white">
            <div className="mb-6 text-center flex flex-col gap-y-2 items-center md:items-start">
                <img src={logo} alt="" className="w-28" />
                <h2 className="mt-2 text-xl font-semibold text-gray-800 text-clip md:text-left">Registro</h2>
            </div>
            <form onSubmit={handleSubmit}>
                <Inputs
                    label="Nombres"
                    placeholder="Ingrese nombres"
                    name="nombres"
                    value={formData.nombres}
                    onChange={handleChange}
                    hasError={errors.nombres}
                    required={true}
                    type="text"
                />

                <Inputs
                    label="Apellidos"
                    placeholder="Ingrese apellidos"
                    name="apellidos"
                    value={formData.apellidos}
                    onChange={handleChange}
                    hasError={errors.apellidos}
                    required={true}
                    type="text"
                />

                <Inputs
                    label="Correo"
                    placeholder="ejemplo@gmail.com"
                    name="correo"
                    value={formData.correo}
                    onChange={handleChange}
                    hasError={errors.correo}
                    required={true}
                />

                <div className="mb-2">
                    <label htmlFor="telefono" className="block text-sm font-medium text-gray-700">Número de teléfono</label>
                    <div className="flex">
                        <select className="border rounded-l-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                            <option value="sv">🇸🇻</option>
                        </select>
                        <input
                            type="text"
                            id="telefono"
                            name="telefono"
                            placeholder="(+503)"
                            value={formData.telefono}
                            onChange={handleChange}
                            className={`w-full px-3 py-2 border rounded-r-md focus:outline-none focus:ring-2 ${errors.telefono ? 'border-red-500' : 'focus:ring-blue-500'}`}
                        />
                    </div>
                </div>

                <InputSelect
                    label="Tipo de identificación"
                    name="tipoIdentificacion"
                    value={formData.tipoIdentificacion}
                    onChange={handleChange}
                    options={[
                        { id: 'DUI', nombre: 'DUI' },
                        { id: 'NIT', nombre: 'NIT' },
                        { id: 'Pasaporte', nombre: 'Pasaporte' },
                    ]}
                    hasError={errors.tipoIdentificacion}
                    required={true}
                />

                <Inputs
                    label="Número de identificación"
                    placeholder="000000000-0"
                    name="numeroIdentificacion"
                    value={formData.numeroIdentificacion}
                    onChange={handleChange}
                    hasError={errors.numeroIdentificacion}
                    required={true}
                    type="text"
                />

                <div>
                    <button
                        type='submit'
                        className="w-full px-4 py-2 font-medium text-white bg-orange-500 rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    >
                        Continuar
                    </button>
                </div>

                {formError && <p className="text-red-500 text-sm mt-2">{formError}</p>}
            </form>
        </div>
    );
}

export default Form;
