import { useSelector } from 'react-redux';
import imagePrueba from './assets/error.png'

function Home(props) {
  const allDogs = useSelector(st=>st.allDogs)
  useSelector(()=>{
    console.log(allDogs)
  },[])

  return ( 
    <div>
      <div>
        <input type="text" placeholder='Nombre'/>
        <div>
          <input type="checkbox"/> <label htmlFor="">API</label>
          <input type="checkbox"/> <label htmlFor="">DATA BASE</label>
        </div>
        <div>
          <label htmlFor="">Name</label><button>Ascendente </button>
        </div>
        <div>
          <label htmlFor="">Peso</label><button>Ascendente </button>
        </div>
      </div>
      <div>
        <div>
          <img src={imagePrueba} alt="cardImage"/>
          <h2>Nombre</h2>
          <h2>Peso</h2>
          <h2>Temperamentos</h2>
        </div>
      </div>
      <div>
        <button>next</button>
        <p>n pagina</p>
        <button>previus</button>
      </div>
    </div>
  );
}

export default Home;