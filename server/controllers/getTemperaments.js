const {Temperament} = require('../dataBase')

const getTemperaments = async (req,res)=>{
  let ans = ['']
  try{
    const allTemperament = await Temperament.findAll();

    allTemperament.forEach(el=>ans = [...ans,el.name])

    res.status(200).json(ans)
    
  }catch(err){
    res.status(500).json({message:err.message})
  }
}


module.exports = getTemperaments;