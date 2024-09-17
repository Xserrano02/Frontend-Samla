import { showSuccessAlert,showErrorAlert } from '../components/Alert/AlertSucess'
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

  
  export const PostUsers = async (formData) => {
    console.log('Datos que se enviarán: APIIIIII', formData);

    try {
      const response = await fetch('http://localhost:4001/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        showSuccessAlert()
      }
      else{
        showErrorAlert()
      }
  
      const result = await response.json();
      console.log('Datos guardados:', result);
      return result;
    } catch (error) {
      console.error('Error al enviar los datos:', error);
      throw error;
    }
  };