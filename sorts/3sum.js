/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var threeSum = function(nums) {
    let resultArr = []
    for(let i = 0; i < nums.length; i++){
        for(let j = i+1; j < nums.length;j++){
            for(let k = j+1; k < nums.length; k++){
                if(nums[i] + nums[j] + nums[k] === 0){
                    resultArr.push([nums[i], nums[j], nums[k]])
                }
            }
        }
    }
    return resultArr
};

console.log(threeSum([-1,0,1,2,-1,-4]))
console.log(threeSum([0,1,1]))
console.log(threeSum([0,0,0]))