const {DataTypes} = require('sequelize');

const timestamps = false;

module.exports = (dataBase) =>{
  dataBase.define('Dog',{
    id:{
      type: DataTypes.SMALLINT,
      primaryKey: true,
      autoIncrement: true,
      validate:{min:200},
    },
    image:{
      type: DataTypes.BLOB,
      allowNull: false,
    },
    name:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    height:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    weight:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    yearsLife:{
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {timestamps}
  )
};