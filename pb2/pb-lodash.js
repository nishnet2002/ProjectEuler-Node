var _ = require('lodash');

var myFunction = _.curry(function (obj) {
	console.log("Setting Name");
	obj.setName = "NameSet";
	return obj;
});

var op1 = myFunction({});
var op2 = op1();