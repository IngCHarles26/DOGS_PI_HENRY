import { useSelector } from 'react-redux';
import defaultImage from './assets/default.jpg'
import { useEffect, useState } from 'react';
import NavigationBar from './navigationBar';
import Card from './card';
import SearchBar from './searchBar';

const numCards = 8;

export default function Home(props) {
  const allDogs     = useSelector(el=>el.allDogs)
  const allTemp     = useSelector(el=>el.allTemp)
  const curretPage  = useSelector(st=>st.page);

  const [filtDogs, setFiltDogs] = useState([]);
  const [page, setPage]         = useState(curretPage);
  const [breed, setBreed] = useState('');
  const [filtApi, setFiltApi] = useState(true);
  const [filtDB, setFiltDB] = useState(true);
  const [filtName, setFiltName] = useState('');
  const [filtWeight, setFiltWeight] = useState('');

  const maxPage = Math.ceil(allDogs.length/numCards);
  
  // console.log(filtName,filtWeight)

  const handlePage = (n)=>{
    let newPage = page+n;
    if(newPage<1) return setPage(maxPage);
    if(newPage>maxPage) return setPage(1);
    setPage(page+n)
  }

  useEffect(()=>{
    setFiltDogs(allDogs)
  },[allDogs])

  useEffect(()=>{
    const time = setTimeout(()=>{
      console.log(breed)
    },2000);
    return ()=>clearTimeout(time)
  },[breed])

  return ( 
    <div>
      <SearchBar
        page={page}
        handlePage={handlePage}
        maxPage={maxPage}
        filtApi={filtApi}
        setFiltApi={setFiltApi}
        filtDB={filtDB}
        setFiltDB={setFiltDB}
        setFiltName={setFiltName}
        setFiltWeight={setFiltWeight}
        breed={breed}
        setBreed={setBreed}/>

      <div className='homeCards'>
      {filtDogs.slice((page-1)*numCards,page*numCards).map(el=><Card
          allTemp={allTemp}
          key={'card_'+el.id}
          defaultImage={defaultImage}
          name={el.name}
          id={el.id}
          image={el.image}
          weight={el.weight}
          origin={el.origin}
          temperament={el.temperament}
          page={page}/>)}
      </div>

    </div>
  );
}
