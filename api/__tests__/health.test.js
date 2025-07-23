const request = require('supertest');
const express = require('express');

const app = express();
app.get('/', (req, res) => {
  res.send('E-Commerce API is running 🚀');
});

describe('GET /', () => {
  it('should return 200 OK with message', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe('E-Commerce API is running 🚀');
  });
});

