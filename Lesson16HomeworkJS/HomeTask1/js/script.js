var a = 1, sum = 0;
for(var i = 1;i<=100;i++){
	a = sum;
	sum = sum + i; //or "sum += i;"
	console.log(i + " + " + a + " = " + sum); 
}
console.log("Сумма: " + sum);
