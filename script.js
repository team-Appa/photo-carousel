import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
  vus: 1000,
  duration: '300s'
};

export default function() {
  var rand = Math.floor(Math.random() * 9999999)
  http.get(`http://localhost:3003/api/products?id=${rand}`);
  sleep(1);
}