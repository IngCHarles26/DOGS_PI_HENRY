const origin = Date.parse('01 Oct 2023');
const {Dog} = require('../dataBase')

const generateID = () => Math.floor(Math.random()*(999999-100000)+100000)*1000;
const dogss = [
  {
    id:generateID()+501,
    image:'D:/DESARROLLO WEB/HENRY/DOGS_PROJECT/photos/pe1.jpg',
    name:'Toby',
    height:'5-10',
    weight:'28-40',
    yearsLife:'10-15',
    temperaments:[2,4,6]
  },
  {
    id:generateID()+502,
    image:'D:/DESARROLLO WEB/HENRY/DOGS_PROJECT/photos/pe2.jpg',
    name:'Chato',
    height:'7',
    weight:'20-30',
    yearsLife:'15',
    temperaments:[10,11,12]
  },
  {
    id:generateID()+503,
    image:'D:/DESARROLLO WEB/HENRY/DOGS_PROJECT/photos/pe3.jpg',
    name:'Leon',
    height:'7-12',
    weight:'30',
    yearsLife:'12-15',
    temperaments:[1,3,5]
  },
  {
    id:generateID()+504,
    image:'D:/DESARROLLO WEB/HENRY/DOGS_PROJECT/photos/pe4.jpg',
    name:'Tilin',
    height:'5-15',
    weight:'20-25',
    yearsLife:'12-18',
    temperaments:[20,21,22]
  },
  {
    id:generateID()+505,
    image:'D:/DESARROLLO WEB/HENRY/DOGS_PROJECT/photos/pe5.jpg',
    name:'Lulu',
    height:'15',
    weight:'18-25',
    yearsLife:'15-18',
    temperaments:[40,41,42]
  },
];

const relations = dogss.map(el=>el.temperaments.map(el1=>{return {DogId: el.id, TemperamentId:el1}})).flat()

module.exports = {dogss,relations};

// module.exports = async ()=>{
//   try{
//     for(let dg of dogss){
//       const {id,image,name,height,weight,yearsLife,temperaments} = dg;
//       const newDog = await Dog.Create({id,image,name,height,weight,yearsLife});
//       newDog.addTemperaments(temperaments)
//     }
//   }catch(err){
//     console.log({message:err.message})
//   }
// }