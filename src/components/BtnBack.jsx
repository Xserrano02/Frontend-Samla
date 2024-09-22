import { useNavigate } from 'react-router-dom';
import arrow from '../Assets/images/arrow.png'

const GenericComponent = () => {

    const navigate = useNavigate()

  
    const handleNavigateback = () =>{
      navigate('/')
  
    }

    return (
        <button className='absolute md:hidden top-16 left-5'>
        <img src={arrow} alt='' onClick={handleNavigateback} className='w-10'/>
        </button>
    );
  };
  
  export default GenericComponent;
  