const mongoose = require('mongoose');
const dbconnection = mongoose.connect('mongodb://localhost/products');

const mong = mongoose.connect('dbconnection');
module.exports = mong;