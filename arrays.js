var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

// var addElementToBeginningOfArray= ['hello']
//
// var newElement = addElementToBeginningOfArray.unshift('klk');

function addElementToBeginningOfArray(array, element){

  let newArray = array;
   newArray.unshift(element);
 return newArray;
}
