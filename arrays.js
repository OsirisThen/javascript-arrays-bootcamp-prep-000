var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

// var addElementToBeginningOfArray= ['hello']
//
// var newElement = addElementToBeginningOfArray.unshift('klk');

function addElementToBeginningOfArray(array, element){

 if(array.length === 1){
   array.unshift(element);
   result = array;
 }else{
   array.shift();
   result = array;
 }
 return result;
}
