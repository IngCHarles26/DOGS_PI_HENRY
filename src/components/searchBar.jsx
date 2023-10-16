import axios from "axios";
import { useEffect, useState } from "react";

export default function SearchBar(props){
  const [name, setName] = useState();
  const [weight, setWeight] = useState();
  const {handlePage,page,maxPage,filtApi,setFiltApi,filtDB,setFiltDB,setFiltName,setFiltWeight,breed,setBreed} = props;

  const nextPage = ()=>{handlePage(1)};
  const previusPage = ()=>{handlePage(-1)};

  const handleCheckBoxApi = ()=>{setFiltApi(!filtApi)};
  const handleCheckBoxDB = ()=>{setFiltDB(!filtDB)};

  const handleWeight = (e)=>{setFiltWeight(e.target.value);setWeight(e.target.value)}
  const handleName = (e)=>{setFiltName(e.target.value);setName(e.target.value)}

  const handleBreed = (e)=>{setBreed(e.target.value)};



  return(
    <div className="searchCont">
      <svg onClick={previusPage} xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-badge-left-filled" width="40" height="40" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M17 6h-6a1 1 0 0 0 -.78 .375l-4 5a1 1 0 0 0 0 1.25l4 5a1 1 0 0 0 .78 .375h6l.112 -.006a1 1 0 0 0 .669 -1.619l-3.501 -4.375l3.5 -4.375a1 1 0 0 0 -.78 -1.625z" strokeWidth="0" fill="currentColor" />
      </svg>
      <input className="searchInputName" type="text" placeholder='🔍 Breed' value={breed} onChange={handleBreed}/>
      <div>
        <input onChange={handleCheckBoxApi} type="checkbox" checked={filtApi}/> <label htmlFor="">API </label>
        <input onChange={handleCheckBoxDB} type="checkbox" checked={filtDB}/> <label htmlFor="">DATA BASE</label>
      </div>
      <div>
        <span>Page: {page}/{maxPage}</span>
      </div>
      <div>
        <label>Name: </label>
        <select onChange={handleName} value={name}>
          <option value=''>None..</option>
          <option value='name +'>Ascending</option>
          <option value='name -'>Descending</option>
        </select>
      </div>
      <div>
        <label>Weight: </label>
        <select onChange={handleWeight} value={weight}>
          <option value=''>None..</option>
          <option value='weight +'>Increase</option>
          <option value='weight -'>Decrease</option>
        </select>
      </div>
      <svg onClick={nextPage} xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-badge-right-filled" width="40" height="40" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M7 6l-.112 .006a1 1 0 0 0 -.669 1.619l3.501 4.375l-3.5 4.375a1 1 0 0 0 .78 1.625h6a1 1 0 0 0 .78 -.375l4 -5a1 1 0 0 0 0 -1.25l-4 -5a1 1 0 0 0 -.78 -.375h-6z" strokeWidth="0" fill="currentColor" />
      </svg>
    </div>
  )
}