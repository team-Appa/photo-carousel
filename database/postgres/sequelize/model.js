const {Sequelize, Model, DataTypes} = require('sequelize');

const factory = (sequelize) => {
  class Carousel extends Model {}
  Carousel.init({
    name: Sequelize.STRING,
    imgurl: Sequelize.STRING,
    cost: Sequelize.INTEGER,
    ratings: Sequelize.INTEGER,
    reviewcount: Sequelize.INTEGER
  }, {sequelize, modelName: 'carousel'});
  return Carousel;
}

module.exports.factory = factory;