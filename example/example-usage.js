'use strict'

const asjson = require('asjson')
const co = require('co')

co(function * () {
  yield asjson('*/index.js', {
    cwd: 'src',
    out: 'dest'
  })
}).catch((err) => console.error(err))
