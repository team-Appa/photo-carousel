const {Client} = require('pg');
const path = require('path');
const credentials = require('./credentials.js');

const client = new Client({
  user: credentials.username,
  host: credentials.host,
  database: credentials.database,
  password: credentials.password,
  port: 5432
})

client
  .connect()
  .then(() => {
    console.log(`connected to ${client.database}`);
  });
  //   return client.query("DROP DATABASE IF EXISTS carousel")
  // })
  // .then(() => {
  //   return client.query("CREATE DATABASE carousel");
  // })
  // // .then(() => {
  // //   return client.query("DROP TABLE IF EXISTS carousels");
  // // })
  // .then(() => {
  //   console.log('created database carousel');
  //   return client.query(`CREATE TABLE carousels (
  //     _id SERIAL PRIMARY KEY,
  //     name text,
  //     imgurl text,
  //     cost text,
  //     ratings text,
  //     reviewcount text
  //   );`);
  // })
  // .then(() => {
  //   console.log("create index for carousel ID")
  //   return client.query(`CREATE INDEX id_check ON carousels (_id);`)
  // })
  // .then(() => {
  //   console.log("insert data into carousels")
  //   return client.query(`COPY carousels (name,imgurl,cost,ratings,reviewcount) FROM '/Users/vasanarul/Desktop/HRR-W8/SDC/photo-carousel/carousels.csv' DELIMITER ',' CSV;`)
  // })
  // .catch((err) => {
  //   console.log(err)
  // })
  // .finally(() => {
  //   console.log("seeded carousel")
  //   return client.end()
  // })

module.exports = client;

