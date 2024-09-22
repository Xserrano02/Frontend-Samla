import { showSuccessAlert2, ShowFaceRecognition2 } from '../components/Alert/AlertSucess'
import Swal from 'sweetalert2';

export const fetchUbicaciones = async () => {
    try {
      const response = await fetch('https://api.npoint.io/253f0ee259ef1620a547/departamentos');
      if (!response.ok) {
        throw new Error('Error al obtener datos de la API');
      }
      const data = await response.json();
  
      const departamentos = data.map((departamento) => ({
        id: departamento.id,
        nombre: departamento.nombre,
        municipios: departamento.municipios,
      }));
  
      return departamentos;
    } catch (error) {
      console.error('Error al consumir la API:', error);
      throw error;
    }
  };

  
  export const PostUsers = async (formData, ShowFaceRecognition, showSuccessAlert) => {
    console.log('Datos que se enviarán:', formData);

    try {
        // Mostrar alerta de procesamiento
        Swal.fire({
            title: 'Procesando...',
            text: 'Por favor, espere mientras procesamos la información',
            allowOutsideClick: false,
            didOpen: () => {
                Swal.showLoading(); // Muestra el spinner de carga
            }
        });

        const response = await fetch('http://localhost:4000/api/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': 'dbaf1dfc-1931-452e-b09a-66b5a39c7b16'
            },
            body: JSON.stringify(formData),
        });

        const result = await response.json(); // Obtener el mensaje del backend

        if (response.ok) {
            Swal.close(); 
            showSuccessAlert2();
            return result; // Devolver los datos recibidos si todo está bien
        } else {
            Swal.close(); // Cierra la alerta de "Procesando..."
            ShowFaceRecognition2(result.message); // Mostrar el mensaje de alerta si los rostros no coinciden
            return null;
        }

    } catch (error) {
        console.error('Error al enviar los datos:', error);
        Swal.close(); // Cierra la alerta de "Procesando..."
        ShowFaceRecognition2('Hubo un error al enviar los datos'); // Muestra el error
        throw error; // Puedes manejarlo según sea necesario
    }
};



  export const GetsUser = async (updateFormData) => {
    try {
        const response = await fetch('http://localhost:4000/api/users', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': 'dbaf1dfc-1931-452e-b09a-66b5a39c7b16'
            },
        });
  
        if (!response.ok) {
            throw new Error(`Error en la solicitud: ${response.status}`);
        }
  
        const result = await response.json();
        console.log('Datos recibidos:', result);
  
        if (result && Array.isArray(result)) {
            updateFormData({ usuarios: result });
        }
  
        return result;
    } catch (error) {
        console.error('Error al obtener los datos:', error);
        throw error;
    }
};

  