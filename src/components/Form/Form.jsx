import React from 'react';


function Register() {
    return (
        <div class="mx-10 mt-33 bg-white">
            <div class="mb-6 text-center">
                <h1 class="text-4xl font-bold text-left">
                    <span class="text-black ">Sam</span><span class="text-blue-500">la</span>
                </h1>
                <h2 class="mt-2 text-xl font-semibold text-gray-800 text-left">Registro</h2>
            </div>
            <form>
                <div class="mb-2">
                    <label for="nombre" class="block text-sm font-medium text-blue-600">Nombres</label>
                    <input type="text" id="nombre" placeholder="Ingresar nombres" class="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>

                <div class="mb-2">
                    <label for="apellido" class="block text-sm font-medium text-gray-700">Apellidos</label>
                    <input type="text" id="apellido" placeholder="Ingresar apellidos" class="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>

                <div class="mb-2">
                    <label for="correo" class="block text-sm font-medium text-gray-700">Correo</label>
                    <input type="email" id="correo" placeholder="ejemplo@gmail.com" class="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>

                <div class="mb-2">
                    <label for="telefono" class="block text-sm font-medium text-gray-700">Número de teléfono</label>
                    <div class="flex">
                        <select class="border rounded-l-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                            <option value="sv">🇸🇻</option>
                        </select>
                        <input type="text" id="telefono" placeholder="(+503)" class="w-full px-3 py-2 border rounded-r-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>
                </div>

                <div class="mb-4">
                    <label for="tipo-id" class="block text-sm font-medium text-gray-700">Tipo de identificación</label>
                    <select id="tipo-id" class="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option value="">Seleccionar</option>
                    </select>
                </div>

                <div class="mb-4">
                    <label for="numero-id" class="block text-sm font-medium text-gray-700">Número de identificación</label>
                    <input type="text" id="numero-id" placeholder="0000-0" class="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>

                <div>
                    <button type="submit" class="w-full px-4 py-2 font-medium text-white bg-orange-500 rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500">Continuar</button>
                </div>
            </form>
        </div>

    );
}

export default Register;
