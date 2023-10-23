import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const valName =  /^[a-zA-Z\s]+$/;
const minMax = /\s+/g;
const URL = 'http://localhost:3001/pi_dogs/dogs'

const initialForm = {
  origin:'DB',
  name:'',
  height:'',
  weight:'',
  yearsLife:'',
  image: 'default',
  temperament:[]
}
const initialValidateForm = {
  name: false,
  height: false,
  weight: false,
  yearsLife: false
}

function Form() {
  const allTemp = useSelector(st=>st.allTemp);
  const allNameDogs = useSelector(st=>st.allDogs).map(el=>el.name.toLowerCase());
  const tempToId = allTemp.reduce((ac,el,ix)=>{return {...ac,[el]:ix}},{});
  const [temp, setTemp] = useState('');
  const [formData, setFormData] = useState(initialForm);
  const [validateForm, setValidateForm] = useState(initialValidateForm);

  const navigate = useNavigate();

  const addTemp = (e)=>{
    e.preventDefault();
    if(!formData.temperament.includes(e.target.value)) 
    setFormData({...formData,temperament:[...formData.temperament,e.target.value]});
  }

  const handleTemp = (e)=>{
    e.preventDefault();
    setTemp(e.target.value)
  }

  const handleInput = (e)=>{
    let {name,value} = e.target;
    let val,aux;
    value = value.replaceAll(minMax,'');
    if(name === 'name'){
      val = !allNameDogs.includes(value.toLowerCase()) && Boolean(value);
      setValidateForm({...validateForm,name:val})
    }else {
      aux = value.split('-');
      val = aux.length<=2 && Boolean(value) && aux.every(el=>typeof +el === 'number' && el !== '');
      setValidateForm({...validateForm,[name]:val})
    }
    console.log(validateForm);
    setFormData({
      ...formData,
      [name]:value,
    })
  }
  
  const handleSubmit = (e)=>{
    e.preventDefault();
    if(Object.values(validateForm).every(el=>el)){
      let {temperament} = formData;
      setFormData({...formData,
        temperament: !temperament.length || temperament.every(el=>el) 
            ? temperament.map(el=>tempToId[el]) 
            : [1]})
      axios.post(URL,formData)
        .then(res=>{window.alert('guardado con éxito');setFormData();navigate('/home')})
        .catch(err=>console.log(err.message))
    }else{
      window.alert('Valores no permitidos')
    }
  }

  return ( 
    <div className="formMax">
      <form className="formComponent" onSubmit={handleSubmit}>
        <h1 className="formTitle">Create your Friend</h1>
        <input className="formInput" onChange={handleInput} value={formData.name} name="name" type="text" placeholder="🐶 BREED"/>
        <input className="formInput" onChange={handleInput} value={formData.height} name="height" type="text" placeholder="📏 HEIGHT  ( min - max ) cm"/>
        <input className="formInput" onChange={handleInput} value={formData.weight} name="weight" type="text" placeholder="🏋 WEIGHT  ( min - max ) kg"/>
        <input className="formInput" onChange={handleInput} value={formData.yearsLife} name="yearsLife" type="text" placeholder="🪦 LIFE  ( min - max ) years"/>
        <input className="formInput" onChange={handleTemp} value={temp} type="search" placeholder="Temperamentos" />
        <div className="formListTemps">
          {temp && allTemp.slice(2)
              .filter(el=>el.toLowerCase().includes(temp.toLowerCase()))
              .slice(0,10)
              .map((el,ix)=>
                <button value={el} onClick={addTemp} key={`temp_form_${ix}`}>{el}</button>)}
        </div>
        <div className="formListChoices">
          {formData.temperament.map((el,ix)=><span key={`tem_to_db_${ix}`}>{el} </span>)}
        </div>
        <button className="formSubmitButton" type="submit">Save</button>
      </form>
    </div>
  );
}

export default Form;