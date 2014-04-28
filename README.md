# timedial


dial it in.

moment.js is great for just about everything except unix timestamps.
timestamps are great for leveldb ranges.

### usage

```
var dial = require('timedial')

var moment = Date.now()

var future = dial.forward(moment, 4, 'hours')

```

### methods

dial#forward(timestamp, factor, unit)

dial#back(timestamp, factor, unit)

dial#readable(timestamp)


### install

`npm install timedial`