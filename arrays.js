var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];


function destructivelyAddElementToBeginningOfArray(array, element){

  let newArray = array;
   newArray.unshift(element);
 return array;
}
