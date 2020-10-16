/*
 * An example of exporting function with named exports
*/

const one = 1 // one is accssible to scope within this file


const getSumPlusOne = (a, b) => {
	return a + b + one
}


// A named exports
exports.getSumPlusOne = getSumPlusOne
