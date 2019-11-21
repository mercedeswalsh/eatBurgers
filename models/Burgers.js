module.exports = (Model, DataTypes, sequelize) => {

    class Burgers extends Model {}
  
    Burgers.init({
      burger: DataTypes.STRING,
      devoured: { type: DataTypes.BOOLEAN, defaultValue: '0' }
    }, { sequelize, modelName: 'burger'})
  
    return Burgers
  }