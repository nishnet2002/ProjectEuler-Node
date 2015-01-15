
/*

Special Pythagorean triplet
Problem 9
A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

a2 + b2 = c2
For example, 32 + 42 = 9 + 16 = 25 = 52.

There exists exactly one Pythagorean triplet for which a + b + c = 1000.
Find the product abc.

*/

/*
a2 + b2 = c2


a + b + c = 100

c = 1000 - a - b

a2 + b2 = (1000 - (a + b)2 )


a2 + b2 = 1000^2 - 2000(a+ b) + (a+b)2 )

0 = 1000^2 - 2000a - 2000b + 2ab 

Equation: 2000a + 2000b - 2ab = 1000^2

Answer: a * b * c = 31875000

*/
'use strict';

var finalValue = 1000000;
for (var a = 1; a < 1000; a++) {
	for(var b = a +1; b < 1000; b++) {
		if(2000 * a + 2000 * b - 2 * a * b === finalValue) {
			console.log(a * b * (1000 - a - b));
			break;
		}
	}
}

