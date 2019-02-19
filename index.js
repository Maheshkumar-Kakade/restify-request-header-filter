function requestHeaderFilter (options) {
  let settings = Object.assign({}, options)
  settings.headersToFilter = settings.headersToFilter || []
  settings.requestProperty = settings.requestProperty || 'filteredHeaders'
  return function (req, res, next) {
    req[settings.requestProperty] = {}
    settings.headersToFilter.forEach((element) => { if (req.headers[element]) req[settings.requestProperty][element] = req.headers[element] })
    return next()
  }
}

module.exports = requestHeaderFilter
