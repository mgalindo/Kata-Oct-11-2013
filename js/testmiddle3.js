var middle3 = require("./middle3.js");

var number = 123;
middle3.getMiddle3(number, function(err, result){
	if (err){
	  console.log('Error getting the 3 middle digits', err)
	}
	else{
		console.log('The middle 3 digits are: '+result);
	};

});



