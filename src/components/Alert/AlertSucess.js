import Swal from 'sweetalert2';

export const showSuccessAlert = () => {
  return Swal.fire({
    title: "Registro completado con exito!",
    text: "Su informacion ha sifo enviada correctamente!",
    icon: "success",
  });
};

export const showErrorAlert = () => {
  return Swal.fire({
    title: "Oops...",
    text: "Algo ha fallado, intente mas tarde",
    icon: "error",
  });
};
