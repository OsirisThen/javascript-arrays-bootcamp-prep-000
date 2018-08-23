var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];


function addElementToBeginningOfArray(array, element){
 array=[element]
  return array;
}

// function addElementToBeginningOfArray(array, element){
//
// }

function destructivelyAddElementToBeginningOfArray(array, element){

  let newArray = array;
   newArray.unshift(element);
   return newArray;
}

// function destructivelyAddElementToBeginningOfArray(array, element){

// }

function destructivelyAddElementToEndOfArray(array, element){

  let newArray = array;
  array.unshift(element);
  array.shift();
  return array;
}
