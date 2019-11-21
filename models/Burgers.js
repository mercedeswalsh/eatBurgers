module.exports = (Model, DataTypes, sequelize) => {

    class Burger extends Model {}
  
    Burger.init({
      name: DataTypes.STRING,
      devoured: { type: DataTypes.BOOLEAN, defaultValue: '0' }
    }, { sequelize, modelName: 'burger'})
  
    return Burger
  }