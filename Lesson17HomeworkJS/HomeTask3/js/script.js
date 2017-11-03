function forAuch (array, conlog) {
	for(var index in array) {
		conlog(array[index], index, array);
	}
}
 var arr = [1, 9, 10, 4];
forAuch(arr, console.log);