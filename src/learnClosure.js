/*
 * This is an example demonstration closure.
 */


let counter = 1 // this variable lives in the global scope.

const incrementCount = (incrementBy) => {
	// incrementBy is a local variable lives inside getCount()
	// only code that lives within getCount() has access to incrementBy

	if (incrementBy){

		// trying to access incrementByDouble will cause exception
		// console.log(incrementByDouble) // !! uncomment this line and see what happen

		// incrementByDouble lives within this conditional statement
		const incrementByDouble = incrementBy * 2

		// since count lives in global scope, it is accessible anywhere within this file
		counter =  counter + incrementByDouble 
	}
	else {
		counter ++ 
	}
}
// console.log(`I cant access ${incrementBy} here :(`) // incrementBy does not belongs to this scope

console.log(`Counter(1): ${counter}`) // counter is accessible here, as it is in the same scope
incrementCount(3)
console.log(`Counter(2): ${counter}`) // counter is accessible here, as it is in the same scope
