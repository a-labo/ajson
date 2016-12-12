/**
 * Test case for ajson.
 * Runs with mocha.
 */
'use strict'

const ajson = require('../lib/ajson.js')
const assert = require('assert')
const co = require('co')

describe('ajson', function () {
  this.timeout(3000)

  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Ajson', () => co(function * () {
    let tmpDir = `${__dirname}/../tmp`
    let mocksDir = `${__dirname}/../misc/mocks`
    yield ajson('**/index.js', {
      cwd: mocksDir,
      out: tmpDir
    })
  }))
})

/* global describe, before, after, it */
