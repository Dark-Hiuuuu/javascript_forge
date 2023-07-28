// // function squareElement(num) {
// //     return num*num;
// // }
// // var arr = [1,2,3]
// // var arrSquare = arr.map(squareElement)
// // console.log(arrSquare)



// // var retangles = [
// //     {w : 10 , h : 10},
// //     {w : 9 , h : 8},
// //     {w : 7 , h : 6}
// // ];
// // function squareRetangles(arr) {
// //     var lst = [];
// //     for(var elenment of arr) {
// //         lst.push(elenment['w']* elenment["h"])
// //     }
// //     return lst;
// // }
// // var retanglesAferSquare = retangles.map(squareRetangles);

// // console.log(retanglesAferSquare)


// var rectangles = [
//     { w: 10, h: 10 },
//     { w: 9, h: 8 },
//     { w: 7, h: 6 }
// ];

// function squareRectangles(arr) {
//     var lst = [];
//     for (var element of arr) {
//         lst.push(element['w'] * element['h']);
//     }
//     return lst;
// }

// var rectanglesAfterSquare = squareRectangles(rectangles)

// console.log(rectanglesAfterSquare);


// var rectangles = [
//     { w: 10, h: 10 },
//     { w: 9, h: 8 },
//     { w: 7, h: 6 }
// ];
// function squareHCN(objectInput){
//     return objectInput.w * objectInput.h
// };
// var afterSqure = rectangles.map(squareHCN);
// console.log(afterSqure)

// function tripple(num) {
//     return num = num*3
// };
// function multiply(inputCharacter) {
//     return tripple(inputCharacter)
// };
// var arr = [1,5,6,9]
// var afterMultiply = arr.map(multiply)
// console.log(afterMultiply)


// 






const users = [
  {
    name: "Angelina Jolie",
    age: 80
    
  },
  {
    name: "Eric Jones",
    age: 2
    
  },
  {
    name: "Paris Hilton",
    age: 5
    
  },
  {
    name: "Kayne West",
    age: 16
    
  },
  {
    name: "Bob Ziroll",
    age: 100
    
  }
]

function readyToPutInTheDOM(arr) {
    return "<h1>" + arr.name + "</h1>\n<h2>" + arr.age + "</h2>";
}
var afterPickin4 = users.map(readyToPutInTheDOM)
console.log(afterPickin4)