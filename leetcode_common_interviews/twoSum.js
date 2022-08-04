/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function(nums, target) {
    for(let i = 0; i < nums.length; i++){
        let difference = target - nums[i]
        for(let j = i + 1; j < nums.length; j++){
            console.log("DIFF: ", difference)
            console.log("I: ",i)cd
            console.log("J: ",j)
            if(difference == nums[j]){
                return [i,j]
            }
        }
    }
};

// console.log(twoSum([2,7,11,15], 9))
console.log(twoSum([3,2,4], 6))