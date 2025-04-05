import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  vus: 10, // 5 Virtual Users
  duration: '30s', // Test duration: 10 seconds
};

export default function () {
  const res = http.get('https://test-api.k6.io/public/crocodiles/');
  check(res, { 
    'Status is 200': (r) => r.status === 200,
    'Response time is below 500ms': (r) => r.timings.duration < 500
  });
  sleep(1);
}
