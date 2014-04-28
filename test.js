

var test = require('tape')
var dial = require('./')

var d = new Date('03/29/1990')
var control = d.getTime()

test('back 30 seconds', function(t) {
  t.plan(1)
  var expected = 638690370000
  var result = dial.back(control, 30, 'seconds')
  t.equals(result, expected)
})


test('back 20 minutes', function(t) {
  t.plan(1)
  var expected = 638689200000
  var result = dial.back(control, 20, 'minutes')
  t.equals(result, expected)
})

test('forward 30 seconds', function(t) {
  t.plan(1)
  var expected = 638690430000
  var result = dial.forward(control, 30, 'seconds')
  t.equals(result, expected)
})


test('forward 15 minutes', function(t) {
  t.plan(1)
  var expected = 638691300000
  var result = dial.forward(control, 15, 'minutes')
  t.equals(result, expected)
})

test('float', function(t) {
  t.plan(1)
  function shouldThrow() {
    dial.forward(control, 2.2, 'hours')
  }
  t.throws(shouldThrow)
})

test('bad unit', function(t) {
  t.plan(1)
  function shouldThrow() {
    dial.forward(control, 4, 'zomboids')
  }
  t.throws(shouldThrow)
})

