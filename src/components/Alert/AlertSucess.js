import Swal from 'sweetalert2';

export const showSuccessAlert2 = () => {
  return Swal.fire({
    title: "Registro completado con exito!",
    text: "Su informacion ha sifo enviada correctamente!",
    icon: "success",
  });
};

export const ShowFaceRecognition2 = () => {
  return Swal.fire({
    title: "Las imagenes no coinciden",
    text: "Vuelva a intentarlo nuevamente",
    icon: "info",
  });
};

export const showErrorAlert2= () => {
  return Swal.fire({
    title: "Oops...",
    text: "Algo ha fallado, intente mas tarde",
    icon: "error",
  });
};
