require('newrelic');
const express = require('express');
const db = require('../database/postgres/postgresSeed.js');
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
  console.log(id);
  console.log(parseInt(id) + 10);
  db.query(`SELECT * FROM carousels WHERE carousels._id BETWEEN ${id} AND ${parseInt(id) + 10}`)
  .then(data => {
    res.send(data.rows)
  });
});

// app.post('/api/products', function(req, res) {
//   View.create(seed.generateData())
//     .then(result => res.send(result));
// });

// app.patch('/api/products', function(req, res) {
//   const id = req.query.id;
//   View.updateOne({id : id}, {__v : 2})
//     .then(result => res.send(result));
// });

// app.delete('/api/products', function(req, res) {
//   const id = req.query.id;
//   View.deleteOne({id : id})
//   .then(result => res.send(result));
// })

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

module.exports = app;