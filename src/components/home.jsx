import { useDispatch, useSelector } from 'react-redux';
import defaultImage from './assets/default.jpg'
import { useEffect } from 'react';
import Card from './card';
import SearchBar from './searchBar';
import axios from 'axios';
import { allDogs, maxPage,allTemp } from '../redux/actions';


export default function Home(props) {
  const allLocalDogs = useSelector(el=>el.allDogs);
  const cardsPerPage = useSelector(el=>el.cardsPerPage);
  const filtApi = useSelector(st=>st.filtApi);
  const filtDb = useSelector(st=>st.filtDb);
  const filtTemp = useSelector(st=>st.filtTemp);
  const breed = useSelector(st=>st.filtBreed);
  const orderBreed = useSelector(st=>st.orderBreed);
  const orderWeight = useSelector(st=>st.orderWeight);
  const currentPage = useSelector(st=>st.currentPage);

  const dispatch = useDispatch();

  useEffect(()=>{
    axios.get('http://localhost:3001/pi_dogs/temperaments')
      .then(({data})=>{dispatch(allTemp(data))})
  },[])

  useEffect(()=>{
    const time = setTimeout(()=>{
      axios.get('http://localhost:3001/pi_dogs/dogs/names/?name='+breed)
        .then(({data})=>{
          dispatch(allDogs(data)) })
    },500);
    return ()=>clearTimeout(time)
  },[breed])

  const filtDogs = ()=>{
    let dogs = [...allLocalDogs].filter(({origin})=> 
          (filtApi && origin === 'API') || 
          (filtDb && origin === 'DB'));
      if(filtTemp !== -1){
        dogs = [...dogs].filter(el=>el.temperament.includes(filtTemp))
      }
      if(orderBreed){
        dogs = [...dogs].sort((a,b)=>orderBreed === '+' 
          ? a.name.localeCompare(b.name) 
          : b.name.localeCompare(a.name))
      }
      if(orderWeight){
        dogs = [...dogs].sort((a,b)=>{
          let valA = +a.weight.split('-').reduce((ac,el)=>+el+ac,0)/2
          let valB = +b.weight.split('-').reduce((ac,el)=>+el+ac,0)/2; 
          return orderWeight === '+' ? valA-valB : valB - valA;
        })
      }
      dispatch(maxPage(dogs.length))
      return dogs.slice((currentPage-1)*cardsPerPage,currentPage*cardsPerPage)
  }

  return ( 
    <div>
      <SearchBar/>

      <div className='homeCards'>
      {filtDogs()
        .map(el=>
          <Card
            key={'card_'+el.id}
            defaultImage={defaultImage}
            name={el.name}
            id={el.id}
            image={el.image}
            weight={el.weight}
            origin={el.origin}
            temperament={el.temperament}/>)}
      </div>

    </div>
  );
}
