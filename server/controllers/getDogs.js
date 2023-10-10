const {Dog,Temperament} = require('../dataBase');
const {transformDataApi,transformDataDB} = require('../utils/transforData')
const {getAllDogsApi} = require('../utils/allDogsApi')

const getDogs = async (req,res)=>{
  try{
    const temperaments = (await Temperament.findAll()).reduce((ac,el)=>{
        return {...ac,[el.name]:el.id}
      },{undefined:'noHave'});

    const dogsDB = (await Dog.findAll({include:Temperament})).map(el=>transformDataDB(el))

    const dogsApi = (await getAllDogsApi()).map(el=>transformDataApi(el,temperaments));

    res.status(200).json([...dogsDB,...dogsApi]);

  }catch(err){
    res.status(500).json({message:err.message})
  }
}


module.exports = getDogs;



    // const dogsDB = (await Dog.findAll({include:Temperament})).map(el=> {
    //     const {id,image,name,height,weight,yearsLife} = el;
    //     const origin = 'DB';
    //     const temperament = el.Temperaments.map(el=>el.id);
    //   return {id,image,name,height,weight,yearsLife,origin,temperament}});


    // res.status(200).json([...dogsDB])

    //wacala
    // let dataTemperaments = await Temperament.findAll(); 
    // dataTemperaments = dataTemperaments.reduce((ac,el)=>{
    //                       return {...ac,[el.name]:el.id}
    //                     },{undefined:'noHave'})

    // let dataDogs = await Dog.findAll(); 
    // dataDogs = dataDogs.map(({id,image,name,height,weight,yearsLife})=>{
    //   return {id,image,name,height,weight,yearsLife,
    //           origin:'BD',
    //           temperament:dogTemperament.filter(el=>+el.DogId === +id).map(el=>el.TemperamentId)}});

    // let {data} = await axios.get(URL+KEY);
    // data = data.map(el=>{
    //   const origin = 'api';
    //   let {id,name,height,weight,image,life_span,temperament} = el;
    //   let yearsLife = life_span.replaceAll(' ','').replaceAll('years','');
    //   //id = +id+generateID();
    //   height = height.metric.replaceAll(' ','')
    //   weight = weight.metric.replaceAll(' ','')
    //   if(temperament) {
    //     temperament = temperament.replaceAll(' ','').split(',').map(el=>dataTemperaments[el]);
    //   }else{
    //     temperament = dataTemperaments[temperament]
    //   }
    //   image = image.url;
    //   return {id,name,height,weight,image,yearsLife,temperament,origin}
    // })

    // res.status(200).json([...dataDogs,...data])
