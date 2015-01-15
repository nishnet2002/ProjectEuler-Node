"use strict";

function isPrime (num) {

	var numSqrt = Math.sqrt(num);
	
	// Condition for perfect sq eg:  7 * 7 = 49
	if (Math.floor(numSqrt) === numSqrt) {
		return false;
	}

	// Divisible by 2
	if (num % 2 === 0 && num > 2 ) return false;

	for (var i = 3 ; i < numSqrt; i += 2) {
		if ( num % i === 0) {
			return false;
		}
	}

	// Couldn't find Factors: its Prime
	return true;
}


function checkPrime (num) {
	console.log(num + " is prime?: " + isPrime(num))
}

module.exports = {
		isPrime: isPrime,
		checkPrime: checkPrime
};