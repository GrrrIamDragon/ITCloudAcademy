var firstStr = prompt('Введите строку');
var secondStr = 'ENGLISH';
 function spEngV2(str, subStr) {
  var result = str.toLocaleLowerCase().indexOf(subStr.toLocaleLowerCase()) !== -1;
   return result;
}
alert(spEngV2(firstStr, secondStr));