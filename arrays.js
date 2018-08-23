var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

// var addElementToBeginningOfArray= ['hello']
//
// var newElement = addElementToBeginningOfArray.unshift('klk');

function addElementToBeginningOfArray(array, element){

  let p= [];
  p= array.unshift(element);
  array.shift();
  return p;
}
