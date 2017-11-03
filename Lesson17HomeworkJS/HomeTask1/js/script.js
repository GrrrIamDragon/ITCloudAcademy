var arr = [];
var n = prompt('Введите число');
var rest = "";
var rest2 = "";
for(var i = 0; i <= 100;i++) {
	arr[i] = n;
	n++;
}
for(var i = 0; i <= 100;i++) {
	if(arr[i] % 2 == 0) {
		rest =  rest + " " + arr[i];
	} else {
		rest2 =  rest2 + " " + arr[i];
	}
}
	console.log("Четные: " + rest);
	console.log("Нечетные: " + rest2);