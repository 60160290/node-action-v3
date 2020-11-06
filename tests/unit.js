const assert = require('assert')
const request = require('supertest')
const app = require('../index')

describe('GET "/"', () =>{
    it('respond with hello!', (done) =>{
        request(app).get('/').expect('Hello!', done)
    })
})
describe('GET "/items"', () =>{
    it('respond with hello!', (done) =>{
        let want = [
        { id : 1, name:'iPhone12 Pro Max'},
        { id: 2, name:'Google Pixel 5'}
        ]
        request(app).get('/items').expect(want, done)
        })
    })