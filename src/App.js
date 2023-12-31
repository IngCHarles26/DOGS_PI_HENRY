import './App.css';
import { Route,Routes } from 'react-router-dom';
import Landing from './components/landing';
import Home from './components/home';
import Detail from './components/detail';
import Form from './components/form';
import Error from './components/error';

function App() {
  

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/home/detail/:id" element={<Detail/>}/>
        <Route path="/form" element={<Form/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
    </div>
  );
}

export default App;
