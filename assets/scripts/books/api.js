const index = function () {
  return $.ajax({
    url: app.host + ‘/books’,
    method: ‘GET’
  })
}
