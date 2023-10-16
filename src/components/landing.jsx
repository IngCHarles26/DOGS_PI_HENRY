
import image from './assets/landing.png'
import { useDispatch } from 'react-redux';
import { addAllDogs, addAllTemp } from '../redux/actions';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function Landing(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const goIn = ()=>{
    
    axios.get('http://localhost:3001/pi_dogs/dogs')
      .then(({data})=>{
          dispatch(addAllDogs(data));
          return axios.get('http://localhost:3001/pi_dogs/temperaments')})
      .then(({data})=>{dispatch(addAllTemp(data))})
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