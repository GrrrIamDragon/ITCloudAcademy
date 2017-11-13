var eng = prompt('Введите строку');

function spEng(str) {
 var result = str.toLocaleLowerCase().indexOf('english') !== -1;
  return result;
}
alert(spEng(eng));