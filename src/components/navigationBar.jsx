export default function NavigationBar(props){
  const {handlePage,page} = props;

  const nextPage = ()=>{
    handlePage(1)
  }
  
  const previusPage = ()=>{
    handlePage(-1)
  }


  return(
    <div>
        <div>
          <button onClick={nextPage}>next</button>
          <p>{page}</p>
          <button onClick={previusPage}>previus</button>
        </div>
    </div>
  )
}