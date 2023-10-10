
import image from './assets/landing.png'
import { useDispatch, useSelector } from 'react-redux';
import { addAllDogs } from '../redux/actions';
import { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function Landing(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const goIn = ()=>{
    axios.get('http://localhost:3001/pi_dogs/dogs')
      //.then(({data})=>console.log(data))
      .then(({data})=>{dispatch(addAllDogs(data))})
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