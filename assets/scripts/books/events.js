
'use strict'
const booksApi = require('./api')
// imports onSuccess and onError from ui.js
const booksUi = require('./ui')

const getBooks = function (e) {
  e.preventDefault()
  // index sends get request to get that data
  booksApi.index()

 // success way
  // .then() is a method if the request works it will run booksUi.onSuccess
    .then(booksUi.onSuccess)
  // have error message
  // .catch() is a method if the request doesn’t work it will run booksUi.onError
    .catch(booksUi.onError)
  }

  module.exports = getBooks
