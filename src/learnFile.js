/*
 * An example of importing from  files
*/
// rules with relative path:
// to refer to current directoy, use ./
// to refer to a subdiretory, use ./<directory-name>/<filename>
// to refer to a directory upper, use ../
// to refer to two directory upper, use ../../ and so on
//
// note that the file extension (.js) is not required
const getSum = require('./getSum') 

// note that since one is not exported, 
// one cannont import it from external files
const { getSumPlusOne } = require('./getSumPlusOne') 

const sum = getSum(1, 2)

const sumPlusOne = getSumPlusOne(1, 2)

console.log(`Learn File ${sum} ${sumPlusOne}`)
