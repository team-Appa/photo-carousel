const {Sequelize, QueryTypes} = require('sequelize');
const credentials = require('./credentials.js');

const sequelize = new Sequelize('carousel', credentials.username, credentials.password, {
  host: 'localhost',
  dialect: 'postgres',
  logging: false,
  define: {
    timestamp: false
  }
});

module.exports = sequelize;