module.exports = (Model, DataTypes, sequelize) => {

    class Burger extends Model {}
  
    Burger.init({
      burger: DataTypes.STRING,
      devoured: { type: DataTypes.BOOLEAN, defaultValue: '0' }
    }, { sequelize, modelName: 'burger'})
  
    return Burger
  }