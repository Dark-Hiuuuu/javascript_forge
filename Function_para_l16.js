// function sayHello() {
//     console.log("I love Hiuuuuu")
// }
// function countAndDo(callBack) {
//     for (var i = 1;i < 11 ;i++) {
//         console.log(i)
//         callBack()
//     }
// }
// console.log(countAndDo(sayHello))

// function double(num) {
//     return num = num * 2
// }
// function sumAndDo(nums,callback) {
//     var sum = 0 ;
//     for(var elenment of nums) {
//         sum += elenment
//     }
//     return callback(sum)
// }
// var lst = [4,5,6,4];
// console.log(sumAndDo(lst,double))


function double(num) {
    return num = num * 2
}
function transform(arr,callBack) {
    lst = []
    for (var elenment of arr) {
        lst.push(callBack(elenment))
    }
    return lst
}
arr = [1,2,4]
console.log(transform(arr,double))




















