window.onload = function(){
	var digit = 33721;
	var digitArray = digit.toString().split('');
	
	var result = digitArray.reduce(function(mul, current){
		return mul * current;
	});
	
	console.log(digitArray);
	console.log(result);
	var pow = result**3;
	console.log(pow);
	var p = pow.toString();
	console.log(p[0] + p[1]);
	
}