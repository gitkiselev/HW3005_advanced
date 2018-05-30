window.onload = function(){
	var digit = 33721;
	var digitArray = digit.toString().split('');
	
	var result = digitArray.reduce(function(mul, current){
		return mul * current;
	});
	
	console.log(digitArray);
	console.log(result);
	
	
}