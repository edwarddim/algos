function binarySearch(arr, target){
    if(arr.length == 1){
        return (arr[0] == target) ? true : false;
    }
    var mid = Math.floor((arr.length) / 2)
    if(target == arr[mid]){
        return true
    }
    if(target < arr[mid]){
        return binarySearch(arr.slice(0, mid), target)
    }
    else{
        return binarySearch(arr.slice(mid, arr.length), target)
    }
}
console.log(binarySearch([1,2,3,4,5,6,7,8,9,10,12,13], 10))
console.log(binarySearch([0, 2, 4, 6, 8, 10, 12, 14, 16], 9 ))
console.log(binarySearch([0, 2, 4, 6, 8, 10, 12, 14, 16], 16 ))
console.log(binarySearch([0, 2, 4, 6, 8, 12, 14, 16], 8 ))
console.log(binarySearch([8], 8 ))