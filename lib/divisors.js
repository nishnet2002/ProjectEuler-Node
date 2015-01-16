'use strict';

var Set = require("./Set");
var l = console.log;

function getDivisors(input) {
	var divisors = new Set();
	/* 1 and number itself is always a divisor */
	divisors.add(1);
	divisors.add(input);
	
    var recent = input;
	for(var i = 2; i < recent; i++ ) {
		if (input % i === 0) {
           		recent = input / i;
			divisors.add(i);
			divisors.add(recent);
		}
	}
	return divisors;
}

module.exports = getDivisors;
