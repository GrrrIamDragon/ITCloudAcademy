var n = prompt("Enter a number");
var factorial = n;
for(var i = n; 0<i; i--){
	if((i-1)!=0) {
		factorial = factorial * (i-1);
	}
}
console.log("Factorial: " + factorial);
