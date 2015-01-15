/*

10001st prime
Problem 7
By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

What is the 10 001st prime number?

Ans: { primeNumber: 104743, count: 10001 }


*/
'use strict';

var isPrime = require('../lib/prime').isPrime;

function getPrimeNumber (idx) {
	var requiredPrimeNumber = 2;
	var count = 1;

	for (var i = 3; count != idx; i += 2) {
		if (isPrime(i)) {
			requiredPrimeNumber = i;
			count++;
		}
	}

	return {
		primeNumber: requiredPrimeNumber,
		count : count
	};
}


console.log(getPrimeNumber(10001));
