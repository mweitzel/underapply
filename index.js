'use strict'
var once = require('once')

module.exports = _apply //(fn) => fn.apply.bind(fn, fn)

function _apply(args) {
  return this.apply(this, args)
}

_apply.englobal = once(() => (
    Object.defineProperty(
      Function.prototype
    , '_a'
    , { get: function() { return _apply.bind(this) } }
    )
  , Object.defineProperty(
      Function.prototype
    , '_apply'
    , { get: function() { return _apply.bind(this) } }
    )
  )
)
