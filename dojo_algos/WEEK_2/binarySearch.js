function binarySearch(arr, target){
        var leftIndex = 0
        var rightIndex = arr.length-1
        while(leftIndex <= rightIndex){
            var midIndex = Math.floor((rightIndex + leftIndex) / 2)
            if(target == arr[midIndex]){
                console.log("FOUND IT")
                return
            }
            if(target < arr[midIndex]){
                rightIndex = midIndex - 1
            }
            else{
                leftIndex = midIndex + 1
            }
        }
        console.log("NOT FOUND")
}
binarySearch([1,2,3,4,5,6,7,8,9,10], 11)