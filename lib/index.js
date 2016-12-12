/**
 * Convert into json file
 * @module ajson
 */

'use strict'

const ajson = require('./ajson')

let lib = ajson.bind(this)

Object.assign(lib, ajson, {
  ajson
})

module.exports = lib
