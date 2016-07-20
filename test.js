var test = require('tape')
  , underapply = require('./index')

underapply.englobal()

test('apply applies', (t) => (
  t.deepEquals(
    ((a, b, c, d) =>
      [a,b,c,d]
    ).bind(null,1)._a([2, 3, 4])
  , [1,2,3,4]
  )
, t.end()
))

test('apply applies', (t) => (
  t.deepEquals(
    ((a, b, c) =>
      [a,b,c]
    )._a([2, 3, 4])
  , [2,3,4]
  )
, t.end()
))
