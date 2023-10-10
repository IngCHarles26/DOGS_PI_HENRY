import { useNavigate, useParams } from 'react-router-dom';
import imagePrueba from './assets/error.png'
import { useSelector } from 'react-redux';
import axios from 'axios';
import { useState } from 'react';
const URL = 'http://localhost:3001/pi_dogs/dogs/'
const initial = {
  id:'ID',
  name:'name',
  height:'height',
  weight:'weight',
  image:'image',
  yearsLife:'yearsLife',
  id:'ID',
}
function Detail(props) {
  const [idData, setIdData] = useState({});
  const {id} = useParams();

  const navigate = useNavigate();

  const navTohomm = ()=>{
    navigate('/home')
  }

  useSelector(()=>{
    axios.get(URL+id)
      .then(({data})=>setIdData(data))
      .catch(err=>console.log(err.message))
  },[])

  return ( 
    <div className='detailComponent'>
      <img className='detailImage' src={idData.image} alt="detailImage" />
      <div className='detailInfoCont'>
        <h1 className='detailInfo'>{idData.name}</h1>
        <h2 className='detailInfo'>{idData.id}</h2>
        <h2 className='detailInfo'>{idData.height}</h2>
        <h2 className='detailInfo'>{idData.weight}</h2>
        <h2 className='detailInfo'>{idData.temperament}</h2>
        <h2 className='detailInfo'>{idData.yearsLife}</h2>
        <div className='detailButtonCont'>
          <button className='homeButton detailButton' onClick={navTohomm}>home</button>
        </div>
      </div>
    </div>
  );
}

export default Detail;