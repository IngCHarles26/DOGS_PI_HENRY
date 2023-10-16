import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { currentPage } from "../redux/actions";



export default function Card(props){
  const {id,defaultImage,image,name,weight,origin,temperament,page} = props;
  const allTemp = useSelector(el=>el.allTemp);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const detailNavigate = ()=>{
    dispatch(currentPage(page))
    navigate('detail/'+id)
  }

  return(
    <div className={`cardCont ${origin}`} onClick={detailNavigate}>
      <img className='cardImage' src={image !== 'default' ? image : defaultImage} alt="cardImage" onError={(e)=>{e.target.src=defaultImage}}/>
      <h2 className="cardName">{name}</h2>
      <p className="cardWeight">Peso: {weight} kg</p>
      <p className="cardTemperaments">{temperament.map(el=>allTemp[el]).join(', ')}</p>
    </div>
  )
}