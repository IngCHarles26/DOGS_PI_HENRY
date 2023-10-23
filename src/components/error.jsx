import { useNavigate } from 'react-router-dom';
import image from './assets/error.png'

function Error() {
  const navigate = useNavigate();

  return ( 
    <div className='errorMax'>
      <div className='errorComponent'>
        <img className='errorImage' src={image} alt="erroImage" />
        <h1 className='errorTitle'>404</h1>
        <p className='errorMessage'>page not found</p>
        <button onClick={()=>navigate('/')} className='homeButton errorButton'>go back</button>
      </div>
    </div>
  );
}

export default Error;