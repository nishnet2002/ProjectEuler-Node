'use strict';

var Set = require("./Set");
var l = console.log;

function getDivisors(input) {
	var divisors = new Set();
	divisors.add(1);
	divisors.add(input);
    var recent = input
	for(var i = 2; i < recent; i++ ) {
		if (input % i === 0) {
           	recent = input / i;
			divisors.add(i);
			divisors.add(recent);
		}
	}
	return divisors;
}

//l(getDivisors(16))
module.exports = getDivisors;
