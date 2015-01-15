/**


Largest prime factor
Problem 3
The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?

*/

var prime = require('./../lib/prime')
var Set = require('./../lib/Set')

console.log(prime);

prime.checkPrime(2);
prime.checkPrime(3);
prime.checkPrime(9);
prime.checkPrime(7);
prime.checkPrime(49);
prime.checkPrime(35);

var num = 13195;

var myPrimeSet = new Set();

function getPrimeFactors(num, i) {
	var numSqrt = Math.sqrt(num);
	var done = false;
	for (; i <= numSqrt; ) {
		if ( num % i === 0 ) {
			myPrimeSet.add(i, true);
			return getPrimeFactors(num / i, i);
		} else {
			if (i !== 2 )
				i += 2;
			else 
				i++;
		}
	}
	myPrimeSet.add(num, true);
	return myPrimeSet;
}

console.log(getPrimeFactors(600851475143, 2));



