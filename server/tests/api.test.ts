import { response } from 'express';
import request from 'supertest';
const server = require('../server');

describe('Happy Path', () => {
  it('should return 0 facts when "total" is 0', async (done) => {
    let res = await request(server)
      .get('/facts')
      .query({total: 0});
    expect(res.status).toBe(200);
    expect(res.body.length).toBe(0);
    done()
  })
  it('should return 100 random cat facts with image urls when "total" is 100', async (done) => {
    let res = await request(server)
      .get('/facts')
      .query({total: 100});
    expect(res.status).toBe(200);
    expect(res.body.length).toBe(100);
    done()
  })
})

describe('Unhappy Path', () => {
  it('should return 0 facts when "total" is negative', async (done) => {
    let res = await request(server)
      .get('/facts')
      .query({total: -1});
    expect(res.status).toBe(200);
    expect(res.body.length).toBe(0);
    done()
  })
  it('should return 100 random cat facts with image urls when "total" is greater than 100', async (done) => {
    let res = await request(server)
      .get('/facts')
      .query({total: 101});
    expect(res.status).toBe(200);
    expect(res.body.length).toBe(100);
    done()
  })
  it('should return 400 status code when "total" is not an integer', async (done) => {
    let res = await request(server)
      .get('/facts')
      .query({total: "a12"});
    expect(res.status).toBe(400);
    expect(res.body).toHaveProperty("msg");
    done()
  })
})