'use strict'
const config = require('../config')

const index = function () {
  return $.ajax({
    url: app.host + ‘/books’,
    method: ‘GET’
  })
}

module.exports = {
  index
}
