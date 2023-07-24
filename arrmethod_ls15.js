function removeEnd(arr,n) {
  for(var i = 1;i<=n;i++){
    arr.pop(arr[-1]);
  }
  return arr
}
var arr = [2,3,4]
console.log(removeEnd(arr,3))




// cho một arr giờ muốn lấy cái arr còn 2 phần tử thì làm gì 
function Fist(arr,n) {
  for(var i = arr.length;i > n; i--) {
    arr.pop(arr[i])    
  }
  return arr
}
var arr = [3,34,45,454,3,5,6,3,6,5,3,2,4,5]
console.log(Fist(arr,6))
