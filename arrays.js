var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

// var addElementToBeginningOfArray= ['hello']
//
// var newElement = addElementToBeginningOfArray.unshift('klk');

function addElementToBeginningOfArray(array, element){

  array.unshift(element);
  array.shift();
  return array;
}
