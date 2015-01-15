'use strict';

/*
Summation of primes
Problem 10
The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

Find the sum of all the primes below two million.

Answer: 142913828922

*/

var isPrime = require('../lib/prime').isPrime;

var sum = 0;
for(var i = 2; i < 2000000; i++) {
	sum += isPrime(i) ? i : 0;
}

console.log(sum);

