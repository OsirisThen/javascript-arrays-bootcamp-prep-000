var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];


function addElementToBeginningOfArray(array, element){
 let newArray=[element, ...array]
 return newArray;
}

function destructivelyAddElementToBeginningOfArray(array, element){

  let newArray = array;
   newArray.unshift(element);
   return newArray;
}

function addElementToEndOfArray(array, element){
  let newArray=[...array, element]
  return newArray;

}

function destructivelyAddElementToEndOfArray(array, element){

  let newArray = array;
  array.push(element);
  return array;
}
