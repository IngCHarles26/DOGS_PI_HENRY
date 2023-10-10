require('dotenv').config();
const axios = require('axios');
const {KEY} = process.env;
const URL = 'https://api.thedogapi.com/v1/breeds?api_key=';
let allData = [];

const getAllDogsApi = async () =>{
  if(allData.length) return allData;
  try{
    const {data} = await axios.get(URL+KEY)
    allData = [...data];
    return {data}
  }catch(err){
    console.log({message:err.message})
  }
}


module.exports = {
  allData,
  getAllDogsApi,
}