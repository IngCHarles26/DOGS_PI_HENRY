require('dotenv').config();
const {PORTBACK} = process.env;
const express = require('express');
const server = express();
const router = require('./routes');
const {dataBase,Temperament,Dog,DogTemperament} = require('./dataBase');
const initialTemperaments = require('./utils/getTemperaments') //initial temperaments
const {dogss,relations} = require('./utils/dogs'); //initial values
const morgan = require('morgan');
const {getAllDogsApi} = require('./utils/allDogsApi')
const save = false  ;

server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.header(
      'Access-Control-Allow-Methods',
      'GET, POST, OPTIONS, PUT, DELETE'
      );
      next();
});

server.use(express.json());
server.use('/pi_dogs',router);

dataBase.sync({force:save})
  .then(()=>{
    return getAllDogsApi();
    })
  .then((data)=>{
    return initialTemperaments(data)
  })
  .then((res)=>{
    if(save){
      Temperament.bulkCreate(res);
      Dog.bulkCreate(dogss);
      DogTemperament.bulkCreate(relations);
    }
  })
  .then(()=>{
    server.listen(PORTBACK,()=>{
      console.log('Server raised in port: '+PORTBACK)
    })
  })
  .catch((err)=>console.log(err.message));

module.exports = server;