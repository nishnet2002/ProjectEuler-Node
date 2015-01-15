"use strict";

 /*
	@param: max: till max value, for infinite: pass '-1'
 */
 function fibGen (max) {
	var a = 1, b = 1;
	var isMax = function () {
		if (max > 0)
			return a + b >= max;
		else
			return false;
	};

	var getNext = function () {
		var c = a + b;
		a = b;
		b = c;
		return c;
	};

	var reset = function () {
		a = 1;
		b = 1;
	};

	return { isMax: isMax, getNext: getNext, reset: reset };
 }

 module.exports = fibGen;