var n = prompt("Введите число");
var seq = "";
var steps = 0;
var vertex = 0;
while(n!=1){
	steps++; //or step = step + 1;
	seq = seq + " " + n;
	if((n % 2) == 0)
	{
		n = n/2; //or n/=2 
	} else{
		n = n * 3 + 1;
	}
	if(n > vertex) vertex = n;
}
console.log("Последовательность:" + seq);
console.log("Количество шагов: " + steps);
console.log("Максимальное число: " + vertex); 