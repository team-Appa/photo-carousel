const express = require('express');

const View = require('../database/View.js');
// const Carousel = require('../database/index.js');
const seed = require('../database/seed.js');

const app = express();
const PORT = 3003;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static(__dirname + '/../dist'));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/api/products', function(req, res) {
  const id = req.query.id;
  View.find({id: id})
    .then((data) => {
      res.status(200).json(data);
    })
});

app.post('/api/products', function(req, res) {
  View.create(seed.generateData())
    .then(result => res.send(result));
});

app.patch('/api/products', function(req, res) {
  const id = req.query.id;
  View.updateOne({id : id}, {__v : 2})
    .then(result => res.send(result));
});

app.delete('/api/products', function(req, res) {
  const id = req.query.id;
  View.deleteOne({id : id})
  .then(result => res.send(result));
})

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

module.exports = app;