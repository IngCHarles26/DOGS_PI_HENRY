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
    <div>
      <img src={image} alt="apruebeme" />
      <p>Que no se de cuenta</p>
      <button onClick={goIn}>Ingresar</button>
    </div>
  );
}

export default Landing;