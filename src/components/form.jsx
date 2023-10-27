import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const valName =  /^[a-zA-Z\s]+$/;
const minMax = /\s+/g;
const onlyNumbers = /[^0-9-]/g;
const URL = 'http://localhost:3001/pi_dogs/dogs';
const maxWeight = 157;
const minWeight = 0.55;
const minHeight = 3.5;
const maxHeight = 200;
const maxYearsLife = 31;

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
  const [selectedTemps, setSelectedTemps] = useState([]);
  const [validateForm, setValidateForm] = useState(initialValidateForm);

  const navigate = useNavigate();

  const addTemp = (e)=>{
    e.preventDefault();
    const {value} = e.target
    if(!formData.temperament.includes(tempToId[value])) {
    setSelectedTemps([...selectedTemps,value])
    setFormData({...formData,temperament:[...formData.temperament,tempToId[value]]});}
  }

  const handleTemp = (e)=>{
    e.preventDefault();
    setTemp(e.target.value)
  }

  const handleInput = (e)=>{
    let {name,value} = e.target;
    let val,aux;
    if(name === 'name'){
      value = value.replaceAll(minMax,' ');
      val = !allNameDogs.includes(value.toLowerCase().trim()) && Boolean(value) && value !== ' ';
      setValidateForm({...validateForm,name:val})
    }else {
      value = value.replaceAll(minMax,'').replaceAll(onlyNumbers,'')
      aux = value.split('-').sort((a,b)=> +a - +b);
      if(name === 'height'){
        val = aux.every(el=>el && el>minHeight && el<maxHeight);
      }else if(name === 'weight'){
        val = aux.every(el=>el && el>minWeight && el<maxWeight);
      }else if(name === 'yearsLife'){
        val = aux.every(el=>el && el<maxYearsLife)
      }
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
    console.log(validateForm)
    if(Object.values(validateForm).every(el=>el)){
      let {name, height, weight, yearsLife, temperament} = formData;
      setFormData({...formData,
        name: name.trim(),
        height: height.split('-').sort((a,b)=> +a - +b).join('-'),
        weight: weight.split('-').sort((a,b)=> +a - +b).join('-'),
        yearsLife: yearsLife.split('-').sort((a,b)=> +a - +b).join('-'),
        temperament: temperament.length ? temperament : [1]
      })
      console.log(formData)
      axios.post(URL,formData)
        .then(res=>{window.alert('guardado con éxito');setFormData(initialForm);navigate('/home')})
        .catch(err=>console.log(err.message))
    }else{
      window.alert('Valores no permitidos')
    }
  }

  return ( 
    <div className="formMax">
      <form className="formComponent" onSubmit={handleSubmit}>
        <h1 className="formTitle">Create your Friend</h1>
        <input className={"formInput " + (!validateForm.name&&'badInput')} onChange={handleInput} value={formData.name} name="name" type="text" placeholder="🐶 BREED"/>
        <input className={"formInput " + (!validateForm.height&&'badInput')} onChange={handleInput} value={formData.height} name="height" type="text" placeholder="📏 HEIGHT  ( min - max ) cm"/>
        <input className={"formInput " + (!validateForm.weight&&'badInput')} onChange={handleInput} value={formData.weight} name="weight" type="text" placeholder="🏋 WEIGHT  ( min - max ) kg"/>
        <input className={"formInput " + (!validateForm.yearsLife&&'badInput')} onChange={handleInput} value={formData.yearsLife} name="yearsLife" type="text" placeholder="🪦 LIFE  ( min - max ) years"/>
        <input className="formInput" onChange={handleTemp} value={temp} type="search" placeholder="Temperamentos" />
        <div className="formListTemps">
          {temp && allTemp.slice(2)
              .filter(el=>el.toLowerCase().includes(temp.toLowerCase()))
              .slice(0,10)
              .map((el,ix)=>
                <button value={el} onClick={addTemp} key={`temp_form_${ix}`}>{el}</button>)}
        </div>
        <div className="formListChoices">
          <p className="formListChoicesTitle">Selected Temperaments</p>
          {selectedTemps.map((el,ix)=><span key={`tem_to_db_${ix}`}>{el} </span>)}
        </div>
        <button className="formSubmitButton" type="submit">Save</button>
      </form>
    </div>
  );
}

export default Form;