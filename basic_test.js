import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  vus: 5, // 5 Virtual Users
  duration: '10s', // Test duration: 10 seconds
};

export default function () {
  const res = http.get('https://test-api.k6.io/public/crocodiles/');
  check(res, { 'Status is 200': (r) => r.status === 200 });
  sleep(1);
}
