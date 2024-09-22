import Swal from 'sweetalert2';

export const showSuccessAlert = () => {
  return Swal.fire({
    title: "Registro completado con exito!",
    text: "Su informacion ha sifo enviada correctamente!",
    icon: "success",
  });
};

export const ShowFaceRecognition = () => {
  return Swal.fire({
    title: "Las imagenes no coinciden",
    text: "Vuelva a intentarlo nuevamente",
    icon: "info",
  });
};

export const showErrorAlert= () => {
  return Swal.fire({
    title: "Oops...",
    text: "Algo ha fallado, intente mas tarde",
    icon: "error",
  });
};
