const express = require('express');
const server = express();
const PORTBACK = 3001;
const router = require('./routes');
const {dataBase} = require('./dataBase');

const morgan = require('morgan');
const save = true;

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
  // .then(()=>{
  //     if(save) saveInfoDB(typeUsers,User);
  //   })
  .then(()=>{
    server.listen(PORTBACK,()=>{
      console.log('Server raised in port: '+PORTBACK)
    })
  })
  .catch((err)=>console.log(err.message));

module.exports = server;

