// function findFirstEvenNumber(array) {
//     return array % 2 === 0 ; 
// }
// var arr = [3,5,67,5,4,6,7];
// var afterFindEvenNumber = arr.find(findFirstEvenNumber)
// console.log(afterFindEvenNumber)



// function findDivisibleNum(array, x) {
//     return array % x == 0 ;
// }
var arr = [1,3,4,6,67,34,2,54,23,535,4523,6465,4356,45,6,5];
var x = 5;
// var afterFindNumber = arr.find((arr) => findDivisibleNum(arr,x));
// console.log(afterFindNumber)
function findDivisibleNum(array,x) { 
    return array.find(arr => arr % x ===0)
}
console.log(findDivisibleNum(arr,x))

// function findNumber(array,x) {
//     return array % x === 0;
// }
// var arr = [23,5,7,10,15,6,7];
// var x = 5;
// var afterFindNumber = arr.filter((arr) => findNumber(arr,x));
// console.log(afterFindNumber)