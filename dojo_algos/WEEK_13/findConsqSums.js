// Interview Algo given to alumni

/* 
  You are given a list of integers. Find all the consecutive set of 
  integers that adds up to the sum passed in as one of the inputs.
*/
/* 
  input: findConsqSums([2,5,3,6,7,23,12], 16)
  output: [
    [2,5,3,6],
    [3,6,7]
  ]
  bonus, what if there are zeros in the input
  input: findConsqSums([2, 5, 3, 6, 7, 0, 0, 23, 12], 16)
  output: [
    [2, 5, 3, 6],
    [3, 6, 7],
    [3, 6, 7, 0],
    [3, 6, 7, 0, 0]
  ]
*/

function findConsqSums(arr, desiredSum) {
    const sums = [];
  
    for (let i = 0; i < arr.length; ++i) {
      const consecNums = [];
      let sum = 0;
      let j = i;
  
      while (sum <= desiredSum && j < arr.length - 1) {
        if (sum + arr[j] <= desiredSum) {
          sum += arr[j];
          consecNums.push(arr[j++]);
  
          if (sum === desiredSum) {
            // without slice, future additions to consecNums
            // will be added to the already pushed consecNums via reference
            sums.push(consecNums.slice());
          }
        } else {
          break;
        }
      }
    }
    return sums;
  }
  
  console.log(findConsqSums([2, 5, 3, 6, 7, 0, 0, 23, 12], 16));