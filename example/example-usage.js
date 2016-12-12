'use strict'

const ajson = require('ajson')
const co = require('co')

co(function * () {
  yield ajson('*/index.js', {
    cwd: 'src',
    out: 'dest'
  })
}).catch((err) => console.error(err))
