  function generateRange(min, max, step) {
 var arr = [];
  if (step > 0 && min < max) {

   for (var i = min; i <= max; i = i + step) {
    arr.push(i);
   }


  } else{
	console.log('Ошибка');
	console.log('step не может быть равен или меньше нуля');
	console.log('min не можеть быть больше или равен max');
  }
return arr;
}

console.log(generateRange(20, 1, 3));
