import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  vus: 2,
  duration: '5s',
};

export default function registerNewUser() {
  const url = 'https://test-api.k6.io/user/register/';
  const payload = JSON.stringify({
    username: `user${__VU}@test.com`,  // Dynamic user
    password: 'SuperSecure123'
  });

  const headers = { 'Content-Type': 'application/json' };

  const res = http.post(url, payload, { headers });

  console.log(__VU, res.status);

  check(res, {
    'Status is 201': (r) => r.status === 201
  });

  sleep(1);
}
