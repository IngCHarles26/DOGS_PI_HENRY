require('dotenv').config();
const {Sequelize} = require('sequelize');
const { USER, PASSWORD , HOST , NAME , PORTDB } = process.env;
// console.log({ USER, PASSWORD , HOST , NAME , PORTDB })
const urlDataBase = `postgres://${USER}:${PASSWORD}@${HOST}:${PORTDB}/${NAME}`;

const configDataBase = {
  logging:false,
  native:false,
};

const dataBase = new Sequelize(urlDataBase,configDataBase);

module.exports = {
  dataBase,
  ...dataBase.models,
};