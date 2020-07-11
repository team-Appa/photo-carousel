// const mongoose = require('mongoose');
// const dbconnection = mongoose.connect('mongodb://localhost/products');

// const db = mongoose.connect('dbconnection');
// module.exports = db;

const {Sequelize} = require('sequelize');

const sequelize = new Sequelize('postgres', 'postgres', 'baseball', {
  host: 'localhost',
  dialect: 'postgres'
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });