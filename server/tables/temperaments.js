const {DataTypes} = require('sequelize');

const timestamps = false;

module.exports = (dataBase) =>{
  dataBase.define('Temperament',{
    id:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name:{
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {timestamps}
  )
};