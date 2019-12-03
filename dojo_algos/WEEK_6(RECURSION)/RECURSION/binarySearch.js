function binarySearch(arr, target){
    if(arr.length == 1){
        console.log(arr)
        return false
    }
    var mid = Math.floor((arr.length) / 2)
    console.log(mid)
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
console.log(binarySearch([1,2,3,4,5,6,7,8,9,10,11], 13))