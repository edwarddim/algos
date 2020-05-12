// https://leetcode.com/problems/two-sum/

/*
  Given an array of integers, return indices of the two numbers such that they add up to a specific target.
  You may assume that each input would have exactly one solution, and you may not use the same element twice.
 */

/* 
  Given nums = [2, 7, 11, 15], target = 9,
  Because nums[0] + nums[1] = 2 + 7 = 9,
  return [0, 1].
  Easier version:
    return an array of the two numbers that add up to the target num
*/

function sumTwo(nums, target) {
    const numsToNeededNum = {};
  
    for (let i = 0; i < nums.length; ++i) {
      numsToNeededNum[nums[i]] = {
        neededNum: target - nums[i],
        idxOfKey: i,
      };
    }
  
    for (const num in numsToNeededNum) {
      const val = numsToNeededNum[num];
  
      if (numsToNeededNum.hasOwnProperty(val.neededNum)) {
        return [val.idxOfKey, numsToNeededNum[val.neededNum].idxOfKey];
      }
    }
  }