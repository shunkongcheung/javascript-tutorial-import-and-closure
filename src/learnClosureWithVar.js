
/*
 * This is an example demonstration closure with var.
 */


let counter = 1 // this variable lives in the global scope.

const incrementCountWithVar   = (incrementBy)   => {
	// although varIncrementDouble is not declared yet, the value is accesible and is undefined
	console.log(`varIncrementDouble within function but before declaration: ${varIncrementDouble}`) 

	// !! NOTE: using var here is a bad practice
	var varIncrementDouble = incrementBy * 2
	counter = counter + varIncrementDouble
}


console.log(`Counter(1): ${counter}`) // counter is accessible here, as it is in the same scope
incrementCountWithVar(3)
console.log(`Counter(2): ${counter}`) // counter is accessible here, as it is in the same scope
