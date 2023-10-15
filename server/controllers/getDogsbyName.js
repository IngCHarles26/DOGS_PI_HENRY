require('dotenv').config();
const axios = require('axios');
const {PORTBACK} = process.env;
const URL = 'http://localhost:'+PORTBACK+'/pi_dogs/dogs';



const getDogsbyName = async (req,res)=>{
  let {name} = req.query;
  try{
    let {data} = await axios.get(URL);

    let ans = data.filter(el=> el.name.toLowerCase().includes(name.toLowerCase()));

    res.status(200).json(ans);

  }catch(err){
    res.status(500).json({message:err.message})
  }
}

module.exports = getDogsbyName;