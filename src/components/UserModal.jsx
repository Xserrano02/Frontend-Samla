import React from 'react';

const UserDetailsModal = ({ user, onClose }) => {
  if (!user) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-11/12 max-w-4xl max-h-[90vh] overflow-y-auto relative">
        <button
          className="absolute top-2 right-2 text-gray-500"
          onClick={onClose}
        >
          ✕
        </button>

        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/4">
            {user.selfieFoto ? (
              <img
                src={user.selfieFoto}
                alt="Selfie"
                className="w-full h-48 md:h-full object-cover"
              />
            ) : (
              <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
                <span>Sin imagen</span>
              </div>
            )}
          </div>

          <div className="w-full md:w-3/4 pl-4 mt-4 md:mt-0 md:ml-14">
            <h2 className="text-2xl font-bold mb-4 text-[000000]">{`${user.nombres} ${user.apellidos}`}</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-[#0f1828]">Correo electrónico</p>
                <p className='text-[#70798d]'>{user.correo}</p>
              </div>
              <div>
                <p className="text-[#0f1828]">Departamento</p>
                <p className='text-[#70798d]' >{user.departamento}</p>
              </div>
              <div>
                <p className="text-[#0f1828]">Número de teléfono</p>
                <p className='text-[#70798d]'>{user.telefono}</p>
              </div>
              <div>
                <p className="text-[#0f1828]">Municipio</p>
                <p className='text-[#70798d]'>{user.municipio}</p>
              </div>
              <div>
                <p className="text-[#0f1828]">Tipo de documento</p>
                <p className='text-[#70798d]'>{user.tipoIdentificacion}</p>
              </div>
              <div>
                <p className="text-[#0f1828]">Dirección</p>
                <p className='text-[#70798d]'>{user.direccion}</p>
              </div>
              <div>
                <p className="text-[#0f1828]">Número de documento</p>
                <p className='text-[#70798d]'>{user.numeroIdentificacion}</p>
              </div>
              <div>
                <p className="text-[#0f1828]">Ingresos mensuales</p>
                <p className='text-[#70798d]'>{user.ingresosMensuales}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <hr className="border-t border-gray-300 my-4" />
          <h3 className="text-lg font-semibold text-[#778094]">Documento de identidad</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            {user.documentoFotoFrontal ? (
              <div className="w-full h-48 flex flex-col md:flex-row justify-between items-center">
                <img
                  src={user.documentoFotoFrontal}
                  alt="Documento Frontal"
                  className="w-full h-full object-cover mr-4"
                />
                <img
                  src={user.documentoFotoTrasera}
                  alt="Documento Trasero"
                  className="w-full h-full object-cover"
                />
              </div>
            ) : (
              <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
                <span>Sin imagen del documento</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetailsModal;
