

// three methods son

module.exports.back = back
module.exports.forward = forward
module.exports.readable = readable

// units

var second = 1000
var minute = 60 * second
var hour = 60 * minute
var day = 24 * hour

// map plural names

module.exports.units = units = {
  seconds: second,
  minutes: minute,
  hours: hour,
  days: day 
}

function back(timestamp, amt, fmt) {
  var valid = (amt === parseInt(amt))
  if (!valid) throw new Error( amt + 'is invalid, must use integers')
  var unit = units[fmt]
  if (!unit) throw new Error(fmt + ' is not a valid unit')
  return timestamp -= (unit * amt)
}

function forward(timestamp, amt, fmt) {
  var valid = (amt === parseInt(amt))
  if (!valid) throw new Error( amt + 'is invalid, must use integers')
  var unit = units[fmt]
  if (!unit) throw new Error(fmt + ' is not a valid unit')
  return timestamp += (unit * amt)
}

function readable(timestamp) {
  var d = new Date(timestamp)
  var parts = [
    d.getMonth() + 1,
    d.getDate(),
    d.getUTCFullYear()
  ].join('/')
  var time = d.toTimeString().split(' ')[0]
  return parts + ' ' + time
}



