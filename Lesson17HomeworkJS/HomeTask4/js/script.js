function map(array, func){
 for( var key in array)
 {
  	array[key] = func(array[key]);
 }
 return array;
}
var arr = [4,9,16];
var sqrtArr = map(arr,Math.sqrt);

console.log(sqrtArr);