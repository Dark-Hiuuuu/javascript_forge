// var order = [
//     {name:'A', quantity:5, price:10},
//     {name:'B', quantity:8, price:10},
//     {name:'C', quantity:7, price:10}
// ]
// function calculatePrice(elementInput) {
//     return elementInput.quantity * elementInput.price
// };
// function totalPriceItem(ele1,el2) {
//     return ele1 + el2
// }
// var orderCalculate = order.map(calculatePrice)
// var totalPrice =  orderCalculate.reduce(totalPriceItem)
// console.log(totalPrice)

// var voters = [
//   {name:'Bob' , age: 30, voted: true},
//   {name:'Jake' , age: 32, voted: true},
//   {name:'Kate' , age: 25, voted: false},
//   {name:'Sam' , age: 20, voted: false},
//   {name:'Phil' , age: 21, voted: true},
//   {name:'Ed' , age:55, voted:true},
//   {name:'Tami' , age: 54, voted:true},
//   {name: 'Mary', age: 31, voted: false},
//   {name: 'Becky', age: 43, voted: false},
//   {name: 'Joey', age: 41, voted: true},
//   {name: 'Jeff', age: 30, voted: true},
//   {name: 'Zack', age: 19, voted: false}
// ];
// function calculateTotal(el1,el2) {
//     return el1 + el2
// }

// function checkValue(arr) {
//     if (arr.voted != true) {
//         return 0;
//     }  
//     return 1
// }
// var arrNew = voters.map(checkValue)
// var arrNewAfterReduce = arrNew.reduce(calculateTotal)
// console.log(ar)
var wishlist = [
  { title: "Tesla Model S", price: 90000 },
  { title: "4 carat diamond ring", price: 45000 },
  { title: "Fancy hacky Sack", price: 5 },
  { title: "Gold fidgit spinner", price: 2000 },
  { title: "A second Tesla Model S", price: 90000 }
];

function shoppingSpree(total,wishlist) {
    return total + wishlist.price;
}
console.log(wishlist.reduce(shoppingSpree,1))


// var wishlist = [
//   { title: "Tesla Model S", price: 90000 },
//   { title: "4 carat diamond ring", price: 45000 },
//   { title: "Fancy hacky Sack", price: 5 },
//   { title: "Gold fidgit spinner", price: 2000 },
//   { title: "A second Tesla Model S", price: 90000 }
// ];

// function arrayTitle(wishlist) {
//     return wishlist.title;
// }
// console.log(wishlist.map(arrayTitle))