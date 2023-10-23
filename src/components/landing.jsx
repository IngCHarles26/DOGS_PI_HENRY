import axios from 'axios';
import image from './assets/landing.png'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { allDogs,allTemp } from '../redux/actions';

function Landing(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const goIn = ()=>{
    axios.get('http://localhost:3001/pi_dogs/dogs')
      .then(({data})=>{
          dispatch(allDogs(data));
          return axios.get('http://localhost:3001/pi_dogs/temperaments')})
      .then(({data})=>{dispatch(allTemp(data))})
      .then(navigate('/home'))
  }
  
  return ( 
    <div className='landingComponent'>
      <img className='landingImage' src={image} alt="apruebeme" />
      <div className='landingInfo'>
        <h1 className='landingTitle'>PROYECTO INDIVIDUAL</h1>
        <h2 className='landingDevName'>CarlosCo_Dev</h2>
        <button className='landingButton' onClick={goIn}>Ingresar</button>
      </div>
    </div>
  );
}

export default Landing;