const request = require('supertest')
const should = require('should')

const relativeUrl = '/filim-api/allyears'

describe('Utility router', () => {
    let server;

    before(() => {
        server = require('../src/index')
    })

    after(() => {
        server.close()
    })

    it('returns status code 200', (done) => {
        request(server)
            .get(relativeUrl)
            .expect(200, done)
    })

    it('return correct current year', (done) => {
        request(server)
            .get(relativeUrl)
            .end((err, res) => {
                should(res.body[0]).be.exactly(new Date().getFullYear())
                done()
            })
    })
})