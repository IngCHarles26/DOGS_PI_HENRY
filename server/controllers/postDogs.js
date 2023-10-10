const {Dog,DogTemperament} = require('../dataBase')

const generateID = () => Math.floor(Math.random()*(999999-100000)+100000)*1000;

const postDogs = async (req,res)=>{
  const {name,image,height,weight,yearsLife,origin,temperament} = req.body;
  try{
    const allDogs = await Dog.findAll();
    const id = generateID()+allDogs.length+1
    const relations = temperament.map(el=>{return {DogId: id, TemperamentId:el}})
    await Dog.create({name,image,height,weight,yearsLife,origin,id})
    await DogTemperament.bulkCreate(relations)
    res.status(200).json({message:'Usuario creado exitosamente'})
  }catch(err){
    res.status(500).json({message:err.message})
  }
}

module.exports = postDogs;
