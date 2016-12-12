/**
 * Test case for asjson.
 * Runs with mocha.
 */
'use strict'

const asjson = require('../lib/asjson.js')
const assert = require('assert')
const co = require('co')

describe('asjson', function () {
  this.timeout(3000)

  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('asjson', () => co(function * () {
    let tmpDir = `${__dirname}/../tmp`
    let mocksDir = `${__dirname}/../misc/mocks`
    yield asjson('**/index.js', {
      cwd: mocksDir,
      out: tmpDir
    })
  }))
})

/* global describe, before, after, it */
