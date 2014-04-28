

var dial = require('./')

var d = new Date('03/29/1990')
var control = d.getTime()

var threeMinutesinTheFuture = dial.forward(control, 3, 'minutes')
printCompare(threeMinutesinTheFuture)

var fourHoursinTheFuture = dial.forward(control, 4, 'hours')
printCompare(fourHoursinTheFuture)

// this would throw an error 
//var float = dial.forward(control, 2.2, 'hours')

function printCompare(updated) {
  var orig = new Date(control)
  var newer = new Date(updated)
  console.log(orig.toString())
  console.log(newer.toString())
}

console.log(dial.readable(control))

