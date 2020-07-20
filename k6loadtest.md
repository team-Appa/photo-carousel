Using K6

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

Data recieved from test:

    data_received..............: 382 MB 1.3 MB/s
    data_sent..................: 18 MB  60 kB/s
    http_req_blocked...........: avg=1.25ms   min=0s med=3µs      max=829.57ms p(90)=7µs   p(95)=13µs
    http_req_connecting........: avg=1.24ms   min=0s med=0s       max=829.48ms p(90)=0s    p(95)=0s
    http_req_duration..........: avg=693.95ms min=0s med=593.36ms max=6.4s     p(90)=1.34s p(95)=1.77s
    http_req_receiving.........: avg=64.45µs  min=0s med=44µs     max=75.46ms  p(90)=83µs  p(95)=106µs
    http_req_sending...........: avg=45.55µs  min=0s med=15µs     max=200.81ms p(90)=29µs  p(95)=39µs
    http_req_tls_handshaking...: avg=0s       min=0s med=0s       max=0s       p(90)=0s    p(95)=0s
    http_req_waiting...........: avg=693.84ms min=0s med=593.27ms max=6.4s     p(90)=1.34s p(95)=1.77s
    http_reqs..................: 176407 584.816289/s
    iteration_duration.........: avg=1.7s     min=1s med=1.59s    max=7.4s     p(90)=2.37s p(95)=2.81s
    iterations.................: 176407 584.816289/s
    vus........................: 351    min=351  max=1000
    vus_max....................: 1000   min=1000 max=1000