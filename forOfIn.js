var myDog = {
    name : "Đần",
    age : 18,
    weight:5
}
for (var key in myDog) {
    console.log(myDog['name'])
}


// function multiply(arr) {
//     var s = 0;
//     for(var element of arr) {
//         s += element
//     }
//     return s;
// }
// arr = [5,6,7]
// console.log(multiply(arr))


// var myDog = {
//     name : "Đần",
//     age : 18,
//     weight:5
// }
// function returnArr(objectInput) {
//     var arr = []
//     for(var key in objectInput){
//         arr.push(key)
//     }
//     return arr
// }
// console.log(returnArr(myDog))


// function multiply(arr){
//     if (arr.length == 0) {
//         return 0
//     }
//     let sum = 0
//     for(var element of arr) {
//         sum += element
//     }
//     return sum
// }
// arr = [7.6,7,7]
// console.log(multiply(arr))



// CÁCH 1
// var myDog = {
//     name : "Đần",
//     age : 18,
//     weight:5
// }
// function addKeytoArr(objectInput){
//     let arr = [];
//     for(var key in objectInput){
//         arr.push(key)
//     }
//     return arr
// }

// function checkObjectHasKey(arr,keyObject){
//     if (arr.includes(keyObject)){
//         return true;
//     } else {
//         return false;
//     }
// }
// var func = addKeytoArr(myDog)
// console.log(checkObjectHasKey(func,"age"))

// // CÁCH 2
// var myDog = {
//     name : "Đần",
//     age : 18,
//     weight:5
// }
// function checkKeyinObject(keyObject,objectInput){
//     return keyObject in objectInput;
// };
// console.log(checkKeyinObject("age",myDog))