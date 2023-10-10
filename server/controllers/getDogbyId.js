require('dotenv').config();
const {KEY} = process.env;
const axios = require('axios');
const URL = 'https://api.thedogapi.com/v1/breeds/';
const {Dog,Temperament} = require('../dataBase');
const {transformDataApi,transformDataDB} = require('../utils/transforData');

const getDogById = async (req,res)=>{
  const {idDog} = req.params;
  let dog = {};
  try{
    const temperaments = (await Temperament.findAll()).reduce((ac,el)=>{
      return {...ac,[el.name]:el.id}
    },{undefined:'noHave'});

    const {data} = await axios.get(URL+idDog+'?api_key='+KEY);
    if(Object.keys(data).length) dog = transformDataApi(data,temperaments);
    else{
      const dataDB = await Dog.findByPk(idDog,{include:Temperament});
      if(dataDB) dog = transformDataDB(dataDB);
      else dog = 'No existe informacion con ese ID';
    }
    res.status(200).json(dog)
  }catch(err){
    res.status(500).json({message:err.message})
  }
}


module.exports = getDogById;


    // if(!Object.keys(data).length){
    //   data = await Dog.findByPk(idDog);
    //   let {id,name,height,weight,image,yearsLife} = data;
    //   origin = 'DB'
    //   let temperament = await DogTemperament.findAll({where:{DogId:data.id}})
    //   temperament = temperament.map(el=>temperaments[el.TemperamentId])
    //   data = {id,name,height,weight,image,yearsLife,origin,temperament}
    // }else{
    //   let {id,name,height,weight,reference_image_id,life_span,temperament} = data;
    //   let yearsLife = life_span.replaceAll(' ','').replaceAll('years','');
    //   // //id = +id+generateID();
    //   height = height.metric.replaceAll(' ','')
    //   weight = weight.metric.replaceAll(' ','')
    //   if(temperament) {
    //     temperament = temperament.replaceAll(' ','').split(',');
    //   }else{
    //     temperament = 'noHave'
    //   }
    //   let image = "https://cdn2.thedogapi.com/images/"+reference_image_id+".jpg";
    //   let origin = 'API';
    //   data = {id,name,height,weight,image,yearsLife,temperament,origin};
    // }