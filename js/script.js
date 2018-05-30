window.onload = function(){
	var digit = 33721;
	var digitArray = digit.toString().split('');
	
	var result = digitArray.reduce(function(mul, current){
		return mul * current;
	});
	
	console.log(digitArray);
	console.log(result);
	var sqrt = Math.pow(result, 3);
	console.log(sqrt);
	var p = sqrt.toString();
	console.log(p[0] + p[1]);
	
}