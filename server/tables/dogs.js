const {DataTypes} = require('sequelize');

const timestamps = false;

module.exports = (dataBase) =>{
  dataBase.define('Dog',{
    id:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      validate:{min:200},
    },
    image:{
      // type: DataTypes.BLOB, // para cuando abilite las imagenes
      type: DataTypes.STRING,
      allowNull: false,
    },
    name:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    height:{
      type: DataTypes.STRING,
      allowNull: false,
      //'min-max' !puede no tener minimo o maximo
    },
    weight:{
      type: DataTypes.STRING,
      allowNull: false,
      //'min-max' !puede no tener minimo o maximo
    },
    yearsLife:{
      type: DataTypes.STRING,
      allowNull: false,
      //'min-max' !puede no tener minimo o maximo
    },
  },
  {timestamps}
  )
};