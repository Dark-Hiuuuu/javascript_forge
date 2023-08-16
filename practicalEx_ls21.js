// var categories = [
//     { id: 1, name: 'Đồ điện tử'},
//     { id: 2, name: 'Đồ gia dụng'},
//     { id: 3, name: 'Nội thất'}
// ];
// var listProducts = [
//     {id: 1, categoryId: 1, name: 'Tivi'},
//     {id: 2, categoryId: 1, name: 'Tủ lạnh'},
//     {id: 3, categoryId: 3, name: 'Ghế sofa'},
//     {id: 4, categoryId: 1, name: 'Máy giặt'},
//     {id: 5, categoryId: 2, name: 'Chén bát'},
//     {id: 6, categoryId: 2, name: 'Nồi cơm điện'},
//     {id: 7, categoryId: 3, name: 'Cửa kính'},
//     {id: 8, categoryId: 1, name: 'Điều hoà'},
//     {id: 9, categoryId: 3, name: 'Bàn tròn'},
//     {id: 10, categoryId: 2, name: 'Lò vi sóng'},
// ]

// function filterProductsByCategoryId(products, categoryId) {
//   var productsFillters = products.filter(product => product.categoryId === categoryId);
//   var categoryName = categories.filter(category =>category.id === categoryId).map(category=>category.name)
//   return { category: categoryName[0], products: productsFillters}
// }
// console.log(filterProductsByCategoryId(listProducts,1))\
  // write code here...

function removeDuplicates(arr) {
  return arr.filter((element, index, array) => array.indexOf(element) === index);
}

// Ví dụ sử dụng hàm:
const arrWithDuplicates = [1, 2, 3, 4, 3, 5, 2, 6, 1];
const arrWithoutDuplicates = removeDuplicates(arrWithDuplicates);
console.log(arrWithoutDuplicates); // Output: [1, 2, 3, 4, 5, 6]
