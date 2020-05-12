// https://www.codewars.com/kata/58f8b35fda19c0c79400020f

/* 
  Given an array of ints, find all the non-consecutive integers
  A number is non-consecutive if it is NOT exactly 1 larger than the previous element.
  The first element is never considered non-consecutive.
  Return an array of objects where each object contains the number itself
  and it's index.
  Input: [1,2,3,4,6,7,8,10]
    - 6 and 10 are the only non-consecutive numbers
  Output: [
  {i: 4, n:6},
  {i: 7, n:10}
]
*/

function allNonConsecutive(nums) {
    const output = [];
  
    for (let i = 1; i < nums.length; ++i) {
      const prevNum = nums[i - 1];
      const currNum = nums[i];
  
      if (prevNum + 1 !== currNum) {
        output.push({
          i: i,
          n: currNum
        });
      }
    }
    return output;
  }