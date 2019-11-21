const Sequelize = require('sequelize')

module.exports = new Sequelize('mysql://root:root@localhost/burgers_db')