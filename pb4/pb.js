/**
Largest palindrome product
Problem 4
A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two 3-digit numbers.


Ans: { maxPalindrome: 906609, combination: '993 * 913' }
*/

'use strict';



function maxPalindrome() {
	var maxPalindrome = 0;
	var combination = "";
	var a = 0, b = 0;


	for (var i = 999; i >= 100; i--) {
		for (var j = i; j >= 100; j--) {
			var mult = j * i;
			if((j > a || j > b) && 
			    (mult > maxPalindrome) && 
				 checkPalindrome(mult)) {
				a = i;
				b = j;
				maxPalindrome = mult;
				combination = a + " * " + b;
			}
		}
	}

	return {
		maxPalindrome : maxPalindrome,
		combination : combination
	};
};
function checkPalindrome (mult) {
	var multStr = "" + mult;
	return multStr === multStr.split("").reverse().join("");
}

var mP = maxPalindrome();
console.log(mP);

