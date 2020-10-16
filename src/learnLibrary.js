/*
 * An example of using librarys
*/


// lodash is an external library. therefore, use `require()` to import
// the library into this scope
const lodash = require('lodash')


const firstNum  = 1
const secondNum  = 2
const isFirstNumEqualSecond = lodash.isEqual(firstNum, secondNum)

// Math is a standard library, therefore, no `required()` is needed
const pi = Math.PI

console.log(`Library result: ${isFirstNumEqualSecond} ${pi}`)
