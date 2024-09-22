import React, { useContext, useEffect, useState } from 'react';
import { FormContext } from '../context/FormContext';
import { GetsUser } from '../services/ApiServices';
import UserDetailsModal from '../components/UserModal';


const Registrations = () => {
  const { formData, updateFormData } = useContext(FormContext);
  const [selectedUser, setSelectedUser] = useState(null); 
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const usersPerPage = 12;

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      await GetsUser(updateFormData);
    };

    fetchData();
  }, [updateFormData]);

  useEffect(() => {
    if (formData.usuarios && formData.usuarios.length > 0) {
      setIsLoading(false);
    }
  }, [formData.usuarios]);

  const handleViewDetails = (user) => {
    setSelectedUser(user);
  };

  const handleCloseModal = () => {
    setSelectedUser(null);
  };

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = formData.usuarios?.slice(indexOfFirstUser, indexOfLastUser);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const totalPages = Math.ceil(formData.usuarios?.length / usersPerPage);

  return (
    <div className="pt-4">

      <h1 className="text-2xl font-bold text-white ml-4 mb-4">Samla</h1>
      <div className="overflow-x-auto bg-white h-screen">
        <h2 className="text-2xl font-bold py-10 mx-4 md:mx-28 text-left">Historial de registros</h2>
        
        <table className="min-w-[100%] md:min-w-[82%] bg-white mx-0 md:mx-28">
          <thead>
            <tr>
              <th className="px-4 py-2 border-b text-[#667085] text-left">Nombres y apellidos</th>
              <th className="px-4 py-2 border-b text-[#667085] text-left hidden md:table-cell">Correo electrónico</th>
              <th className="px-4 py-2 border-b text-[#667085] text-left hidden md:table-cell">Número telefónico</th>
              <th className="px-4 py-2 border-b text-[#667085] text-left">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <tr>
                <td colSpan="4" className="px-4 py-2 border-b text-center">
                  <div className="flex justify-center items-center space-x-2">
                    <div className="w-4 h-4 border-4 border-blue-500 border-t-transparent border-solid rounded-full animate-spin"></div>
                    <span>Cargando información...</span>
                  </div>
                </td>
              </tr>
            ) : currentUsers && currentUsers.length > 0 ? (
              currentUsers.map((usuario, index) => (
                <tr key={index} className="hover:bg-gray-100">
                  <td className="px-4 py-2 border-b">{`${usuario.nombres} ${usuario.apellidos}`}</td>
                  <td className="px-4 py-2 border-b text-[#667085] hidden md:table-cell">{usuario.correo}</td>
                  <td className="px-4 py-2 border-b text-[#667085] hidden md:table-cell">{usuario.telefono}</td>
                  <td
                    className="px-4 py-2 border-b text-blue-500 cursor-pointer"
                    onClick={() => handleViewDetails(usuario)}
                  >
                    Ver detalle
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="px-4 py-2 border-b text-center">
                  No hay registros disponibles
                </td>
              </tr>
            )}
          </tbody>
        </table>

        {formData.usuarios && formData.usuarios.length > usersPerPage && (
          <div className="flex justify-end items-center mt-4 space-x-2 mx-28">
            <button
              className="w-8 h-8 flex items-center justify-center rounded border border-gray-300 text-gray-500 hover:bg-gray-200"
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
            >
              {'<'}
            </button>

            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                className={`w-8 h-8 flex items-center justify-center rounded border ${
                  currentPage === i + 1 ? 'border-blue-500 text-blue-500 font-bold' : 'border-gray-300 text-gray-500'
                } hover:bg-gray-200`}
                onClick={() => paginate(i + 1)}
              >
                {i + 1}
              </button>
            ))}

            <button
              className="w-8 h-8 flex items-center justify-center rounded border border-gray-300 text-gray-500 hover:bg-gray-200"
              onClick={() => paginate(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              {'>'}
            </button>
          </div>
        )}

        {selectedUser && (
          <UserDetailsModal user={selectedUser} onClose={handleCloseModal} />
        )}
      </div>
    </div>
  );
};

export default Registrations;
