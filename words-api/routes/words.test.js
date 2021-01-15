const supertest = require('supertest')
const app = require('../app')
const expect = require('chai').expect

describe('Test iecho endpoint', function () {
  it('it should has status code 400 when text is not present', function (done) {
    supertest(app)
      .get('/iecho')
      .expect(400)
      .end(function (err, res) {
        if (err) done(err)
        done()
      })
  })

  it('it should has status code 400 when text not contains only letters', function (done) {
    supertest(app)
      .get('/iecho?text=hello123')
      .expect(400)
      .end(function (err, res) {
        if (err) done(err)
        done()
      })
  })

  it('it should has status code 400 when text not contains only letters', function (done) {
    supertest(app)
      .get('/iecho?text=hello123')
      .expect(400)
      .end(function (err, res) {
        if (err) done(err)
        done()
      })
  })

  it('it should has status code 200 and valid json response', async () => {
    supertest(app)
      .get('/iecho?text=radar')
      .expect(200)
      .end(function (err, res) {
        if (err) done(err)

        expect(res.body).to.not.be.null

        expect(res.body.text).to.not.be.null
        expect(res.body.text).to.be.eql('radar')

        expect(res.body.palindrome).to.not.be.null
        expect(res.body.palindrome).to.be.eql(true)
      })
  })

  it('it should has status code 200 & valid json & is not palindrome', async () => {
    supertest(app)
      .get('/iecho?text=radaro')
      .expect(200)
      .end(function (err, res) {
        if (err) done(err)

        expect(res.body).to.not.be.null

        expect(res.body.text).to.not.be.null
        expect(res.body.text).to.be.eql('radaro')

        expect(res.body.palindrome).to.not.be.null
        expect(res.body.palindrome).to.be.eql(false)
      })
  })
})
