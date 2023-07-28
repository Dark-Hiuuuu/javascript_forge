// var arr = [6,6,7,8,2,4,5];
// // function findAndOnlyGreater(arr) {
// //     return arr >= 5;
// // }
// // var arrAfter = arr.filter(findAndOnlyGreater);
// // console.log(arrAfter)

// function findEvenNumber(arr) {
//     return arr % 2 === 0;
// }
// var arrAfter = arr.filter(findEvenNumber)
// console.log(arrAfter)

 var members = [
  	{ name: 'Lan', gender: 'female' },
    { name: 'Linh', gender: 'female' },
    { name: 'Trung', gender: 'male' },
    { name: 'Peter', gender: 'gay' }
  ];
function filterOutFemales(members) {
    return members.gender !== "female"
}
var afterFindGender = members.filter(filterOutFemales)
console.log(afterFindGender)