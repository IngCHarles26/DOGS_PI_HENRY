import { useState } from "react";
import { useSelector } from "react-redux";

const valName =  /^[a-zA-Z\s]+$/;
const minMax = /\s+/g;

function Form() {
  const allTemp = useSelector(st=>st.allTemp)
  const [temp, setTemp] = useState('');
  const [formData, setFormData] = useState({
    origin:'DB',
    name:'',
    image:'',
    height:'',
    weight:'',
    yearsLife:'',
    image: 'default',
    temperament:[]
  });

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
    const {name,value} = e.target;
    setFormData({
      ...formData,
      [name]:value.trim(),
    })
  }
  
  console.log(formData)

  const handleSubmit = (e)=>{
    e.preventDefault();
    
  }

  return ( 
    <form className="formComponent" onSubmit={handleSubmit}>
      <h1 className="formTitle">Create your Friend</h1>
      <input onChange={handleInput} value={formData.name} name="name" type="text" placeholder="🐶"/>
      <input onChange={handleInput} value={formData.height} name="height" type="text" placeholder="📏 (min - max) cm"/>
      <input onChange={handleInput} value={formData.weight} name="weight" type="text" placeholder="🏋 (min - max)"/>
      <input onChange={handleInput} value={formData.yearsLife} name="yearsLife" type="text" placeholder="🪦 (min - max) years"/>
      <input onChange={handleTemp} value={temp} type="search" placeholder="Temperamentos" />
      <div>
        {temp && allTemp.filter(el=>el.toLowerCase().includes(temp.toLowerCase()))
            .slice(0,10)
            .map((el,ix)=>
              <button value={el} onClick={addTemp} key={`temp_form_${ix}`}>{el}</button>)}
      </div>
      <div>
        {formData.temperament.map((el,ix)=><span key={`tem_to_db_${ix}`}>{el} </span>)}
      </div>
      <button type="submit">Save</button>
    </form>
  );
}

export default Form;