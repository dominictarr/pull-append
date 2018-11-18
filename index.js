module.exports = function (last) {
  return function (read) {
    var ended
    return function (abort, cb) {
      if(ended) cb(ended)
      else
        read(null, function (end, data) {
          if(!end) cb(null, data)
          else if(end === true) {
            ended = true
            cb(null, last())
          }
          else cb(end)
        })
    }
  }
}

