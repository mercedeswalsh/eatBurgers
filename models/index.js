const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config')

module.exports = {
  Burger: require('./Burgers')(Model, DataTypes, sequelize)
}