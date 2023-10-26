import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Card(props){
  const {id,defaultImage,image,name,weight,origin,temperament} = props;
  const allTemp = useSelector(el=>el.allTemp);
  const navigate = useNavigate();

  const detailNavigate = ()=>{
    navigate('detail/'+id)
  }

  return(
    <div className={`cardCont ${origin}`} onClick={detailNavigate}>
      <img className='cardImage' src={image !== 'default' ? image : defaultImage} alt="cardImage" onError={(e)=>{e.target.src=defaultImage}}/>
      <h2 className="cardName">{name}</h2>
      <p className="cardWeight">Weight: {weight} kg</p>
      <p className="cardTemperaments">{temperament.map(el=>allTemp[el]).join(', ')}</p>
    </div>
  )
}