const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config')

module.exports = {
  Burgers: require('./Burgers')(Model, DataTypes, sequelize)
}