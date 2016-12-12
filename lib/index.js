/**
 * Convert into json file
 * @module asjson
 */

'use strict'

const asjson = require('./asjson')

let lib = asjson.bind(this)

Object.assign(lib, asjson, {
  asjson
})

module.exports = lib
