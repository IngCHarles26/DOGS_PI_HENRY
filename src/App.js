import './App.css';
import { Route,Routes,useLocation,useNavigate } from 'react-router-dom';
import { useEffect,useState } from 'react';
import axios from 'axios';
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
        <Route path="/detail/:id" element={<Detail/>}/>
        <Route path="/form" element={<Form/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
    </div>
  );
}

export default App;
