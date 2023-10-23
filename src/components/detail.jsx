import { useNavigate, useParams } from 'react-router-dom';
import defaultImage from './assets/default.jpg'
import { useSelector } from 'react-redux';
import axios from 'axios';
import { useEffect, useState } from 'react';
const URL = 'http://localhost:3001/pi_dogs/dogs/'

function Detail(props) {
  const allTemp = useSelector(st=>st.allTemp);
  const [idData, setIdData] = useState(null);
  const {id} = useParams();

  const navigate = useNavigate();

  const navTohom = ()=>{
    navigate('/home')
  }

  const navToCreate = ()=>{
    navigate('/form')
  }
  
  useEffect(()=>{
    axios.get(URL+id)
      .then(({data})=>{setIdData(data)})
      .catch(err=>console.log(err.message))
  },[])

  if(!idData){
    return <p>Cargando....</p>
  }

  return ( 
  <div className='detailMax'>
    <div className='detailComponent'>
      <img className='detailImage' src={idData.image !== 'default' ? idData.image : defaultImage} alt="cardImage" onError={(e)=>{e.target.src=defaultImage}} />
      <div className='detailInfoCont'>
        <h1 className='detailInfo'>{idData.name}</h1>
        <h2 className='detailInfo'>ID: <span>{idData.id}</span></h2>
        <h2 className='detailInfo'>Height: <span>{idData.height}</span> cm</h2>
        <h2 className='detailInfo'>Weight: <span>{idData.weight}</span> kg</h2>
        <h2 className='detailInfo'>Temperaments: <span>{idData.temperament.map(el=>allTemp[el]).join('-')}</span></h2>
        <h2 className='detailInfo'>Life Span: <span>{idData.yearsLife}</span> years</h2>
        <div className='detailButtonCont'>
          <button className='homeButton' onClick={navTohom}>home</button>
        </div>
      </div>
    </div>
  </div>
  );
}

export default Detail;