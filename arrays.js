var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];


function addElementToBeginningOfArray(array, element){

  let newArray = array;
   array.unshift(element);
   return array;
}

function destructivelyAddElementToBeginningOfArray(array, element){

  let newArray = array;
   newArray.unshift(element);
 return array;
}
