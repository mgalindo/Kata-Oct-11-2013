function isInt(n) {
	return typeof n === 'number' && parseFloat(n) == parseInt(n, 10) && !isNaN(n);
}

exports.getMiddle3 = function(number, callback){

	if (!isInt(number)) {
		callback(new Error(number+" is not an integer"));
		return;
	};

	var strnumber = number.toString();

	if (strnumber.length < 5) {
		callback(new Error(number+" is not long enough"));
		return;
	}

	result = strnumber.substring((strnumber.length/2)-1, (strnumber.length/2)+2)
	callback(null, result);


};

