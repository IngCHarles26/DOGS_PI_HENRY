import { useDispatch, useSelector } from "react-redux";
import { prevPage,nextPage, changeCheckApi, changeCheckDb, filtBreed, orderByBreed, orderByWeight } from "../redux/actions";
import { useNavigate } from "react-router-dom";

export default function SearchBar(props){
  const dispatch = useDispatch();
  const currentPage = useSelector(st=>st.currentPage)
  const maxPage = useSelector(st=>st.maxPage)
  const filtApi = useSelector(st=>st.filtApi)
  const filtDb = useSelector(st=>st.filtDb)
  const breed = useSelector(st=>st.filtBreed)
  const orderBreed = useSelector(st=>st.orderBreed)
  const orderWeight = useSelector(st=>st.orderWeight)
  const navigate = useNavigate();

  const nextLocalPage = ()=>{dispatch(nextPage())};
  const prevLocalPage = ()=>{dispatch(prevPage())};

  const handleCheckBoxApi = ()=>{dispatch(changeCheckApi())};
  const handleCheckBoxDB = ()=>{dispatch(changeCheckDb())};

  const handleWeight = (e)=>{dispatch(orderByWeight(e.target.value))}
  const handleName = (e)=>{dispatch(orderByBreed(e.target.value))}

  const handleBreed = (e)=>{dispatch(filtBreed(e.target.value))};

  return(
    <div className="searchCont">
      
      <svg onClick={prevLocalPage} 
        xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-badge-left-filled" width="40" height="40" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M17 6h-6a1 1 0 0 0 -.78 .375l-4 5a1 1 0 0 0 0 1.25l4 5a1 1 0 0 0 .78 .375h6l.112 -.006a1 1 0 0 0 .669 -1.619l-3.501 -4.375l3.5 -4.375a1 1 0 0 0 -.78 -1.625z" strokeWidth="0" fill="currentColor" />
      </svg>
      <button className="searchCreate" onClick={()=>navigate('/form')}>
        CREATE
      </button>
      <input value={breed} onChange={handleBreed}
          className="searchInputName" type="text" placeholder='🔍 Breed' />

      <div>
        <input  onChange={handleCheckBoxApi} checked={filtApi} 
            type="checkbox" /> <label className="searchApiCheck" htmlFor="">API </label>

        <input  onChange={handleCheckBoxDB}  checked={filtDb} 
            type="checkbox"/> <label className="searchDbCheck" htmlFor="">DATA BASE</label>
      </div>

      <div>
        <label>Name: </label>
        <select onChange={handleName} value={orderBreed}>
          <option value=''>None..</option>
          <option value='+'>Ascending</option>
          <option value='-'>Descending</option>
        </select>
      </div>

      <div>
        <label>Weight: </label>
        <select onChange={handleWeight} value={orderWeight}>
          <option value=''>None..</option>
          <option value='+'>Increase</option>
          <option value='-'>Decrease</option>
        </select>
      </div>

      <div>
        <span>{maxPage ? `Pág: ${currentPage}/${maxPage}` : 'Sin Coincidencias'}</span>
      </div>

      <svg onClick={nextLocalPage} 
        xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-badge-right-filled" width="40" height="40" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M7 6l-.112 .006a1 1 0 0 0 -.669 1.619l3.501 4.375l-3.5 4.375a1 1 0 0 0 .78 1.625h6a1 1 0 0 0 .78 -.375l4 -5a1 1 0 0 0 0 -1.25l-4 -5a1 1 0 0 0 -.78 -.375h-6z" strokeWidth="0" fill="currentColor" />
      </svg>
    </div>
  )
}