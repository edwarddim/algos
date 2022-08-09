// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

// The overall run time complexity should be O(log (m+n)).

// Input: nums1 = [1,3], nums2 = [2]
// Output: 2.00000
// Explanation: merged array = [1,2,3] and median is 2.

// Input: nums1 = [1,2], nums2 = [3,4]
// Output: 2.50000
// Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.


var findMedianSortedArrays = function(nums1, nums2) {
    let mergedArray = nums1.concat(nums2).sort((a, b) => a - b)

    let middleIndex = Math.floor(mergedArray.length / 2)

    return (mergedArray.length % 2) ? 
        mergedArray[middleIndex] :
        (mergedArray[middleIndex] + mergedArray[middleIndex - 1]) / 2 

};


// console.log(findMedianSortedArrays([1,3], [2]))
// console.log(findMedianSortedArrays([1,2], [3,4]))
console.log(findMedianSortedArrays([3], [-2,-1]))