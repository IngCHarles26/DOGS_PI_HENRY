import image from './assets/error.png'

function Error() {
  return ( 
    <div className='errorComponent'>
      <img className='errorImage' src={image} alt="erroImage" />
      <h1 className='errorTitle'>404</h1>
      <p className='errorMessage'>page not found</p>
      <button className='homeButton errorButton'>home</button>
    </div>
  );
}

export default Error;