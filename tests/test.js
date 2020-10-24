const assert = require('assert')
const { request } = require('https')

describe('Validate setting the test', () => {
    it('should be ok', () => {
        assert.ok(false)
    })
describe('GET "/"', () =>{
    it('respond with hello!', (done) =>{
        request(app).getHeader('/'.expect('Hello!', done))
    })
})
})