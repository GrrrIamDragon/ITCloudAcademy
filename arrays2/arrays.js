(function(exports) {
  "use strict";

  /*
   1. Write a simple JavaScript program to join all elements of the following array into a string.
   Set second argument as choisen separator (e.g. - ";" , "," , "+"). By default must be ",".
   Sample array : myColor = ["Red", "Green", "White", "Black"];
   Expected Output :
   "Red,Green,White,Black"
   "Red,Green,White,Black"
   "Red+Green+White+Black"
   */
     /*
   1. Write a JavaScript function to check whether an `input` is an array or not.
   Test Data :
   console.log(isArray('w3resource'));
   console.log(isArray([1, 2, 4, 0]));
   false
   true
   */
  function isArray(item) {
    return item instanceof Array;
  }

  function join(array, separator) {
  /* 
    if (!isArray(array)) {
           throw new Error('Error: Arrays only.');
        }
    var strJoin = '';
    for(var i = 0; i < array.length;i++){
      strJoin = strJoin + array[i] + separator;
    }
    return strJoin;
    */
    return array.join(separator);

  }

  /*
   2. Write a JavaScript program to sort the items of an array.
   Sample array : var arr1 = [ 3, 8, 7, 6, 5, -4, 3, 2, 1 ];
   Sample Output : -4,-3,1,2,3,5,6,7,8
   */
  function sort(array) {
            if (!isArray(array)) {
                   throw new Error('Error: Arrays only.');
            }
            var temp = 0;

            for (var i = 0; i < array.length-1; i++)
            {
                for (var j = i + 1; j < array.length; j++)
                {
                    if (array[i] > array[j])
                    {
                        temp = array[i];
                        array[i] = array[j];
                        array[j] = temp;
                    }
                }
            }
            return array;
  }

  /*
   3. Write a JavaScript program which accept a string as input and swap the case of each character.
   For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.
   */
  function swapLetter(string) {
    if ( typeof(string) !== "string"){
      throw new Error ('Error: This is not a string.');
    }

    var swapStr = "";
    
    for (var i = 0; i < string.length; i++){

      if(string[i] === string[i].toLowerCase()) {
        swapStr += string[i].toUpperCase();
      } else {
        swapStr += string[i].toLowerCase();
      }
    }

  return swapStr;
  
  }

  exports.arrays = {
    join              : join,
    sort              : sort,
    swapLetter        : swapLetter
  };
})(this);
