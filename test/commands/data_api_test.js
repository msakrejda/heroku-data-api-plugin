'use strict'

const expect = require('chai').expect
const mocha = require('mocha')
const describe = mocha.describe
const it = mocha.it
const beforeEach = mocha.beforeEach
const afterEach = mocha.afterEach
const nock = require('nock')

const cli = require('heroku-cli-util')
const cmd = require('../../commands/data_api')

describe('data-api', () => {
  let pg

  beforeEach(() => {
    cli.mockConsole()
    cli.exit.mock()
    pg = nock('https://postgres-api.heroku.com')
  })

  afterEach(() => {
    pg.done()
    nock.cleanAll()
  })

  it('displays the request result info', function () {
    const method = 'get'
    const path = '/client/v11/postgresql-funky-1234'
    const info = { name: 'myapp', uuid: '32d094f2-0318-4733-ab53-1d6f7a36abf7' }

    pg
      .get(path)
      .reply(200, info)

    return cmd.run({ args: { method, path }, flags: {} })
      .then(() => {
        expect(cli.stdout).to.equal(`{
  "name": "myapp",
  "uuid": "32d094f2-0318-4733-ab53-1d6f7a36abf7"
}
`)
        /* eslint-disable no-unused-expressions */
        expect(cli.stderr).to.be.empty
      })
  })
})
