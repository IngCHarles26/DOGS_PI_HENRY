require('dotenv').config();
const {Sequelize} = require('sequelize');
const { USER, PASSWORD , HOST , NAME , PORTDB } = process.env;
const urlDataBase = `postgres://${USER}:${PASSWORD}@${HOST}:${PORTDB}/${NAME}`;
const dogFunction = require('./tables/dogs');
const temperamentFunction = require('./tables/temperaments');

const configDataBase = {
  logging:false,
  native:false,
};
const through = 'DogTemperament'

const dataBase = new Sequelize(urlDataBase,configDataBase);

dogFunction(dataBase);
temperamentFunction(dataBase);

const {Dog,Temperament} = dataBase.models;

Dog.belongsToMany(Temperament,{through});
Temperament.belongsToMany(Dog,{through});


module.exports = {
  dataBase,
  ...dataBase.models,
};