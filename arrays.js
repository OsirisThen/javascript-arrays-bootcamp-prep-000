var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];


function addElementToBeginningOfArray(array, element){

  array.unshift(element);
  return array;
}

function addElementToBeginningOfArray(array, element){
  array.unshift(element);
  array.slice(1);
  return array;
}

function destructivelyAddElementToBeginningOfArray(array, element){

  let newArray = array;
   newArray.unshift(element);
   return newArray;
}

// function destructivelyAddElementToBeginningOfArray(array, element){
//
//   let newArray = array;
//    newArray.unshift(element);
//  return array;
// }

function destructivelyAddElementToEndOfArray(array, element){

  let newArray = array;
  array.unshift(element);
  array.shift();
  return array;
}
