/* 
  Given an unsorted non-empty array of integers and int k, return the k most frequent elements (in any order)
  You can assume there is always a valid solution
  These example inputs are sorted for readability, but the input is not guaranteed to be sorted and the output does not need to be in any specific order
  
  Input: [1, 1, 1, 2, 2, 3], k = 2
  Output: [1, 2]
  Explanation: return the two most frequent elements, 1 and 2 are the two most frequent elements
  Input: [0, 0, 0, 2, 2, 3], k = 1
  Output: [0]
  Explanation: k being 1 means return the single most frequent element
  Input: [1, 1, 2, 2, 3, 3], k = 3
  Output: [1, 2, 3]
  Explanation: 3 is the only value that would be passed in for k because it is the only value for k that has
  a valid solution. Since 1, 2, and 3, all occur 3 times, they are all the most frequent ints, so there is no
  1 most frequent int, or 2 most frequent int, but there are 3 most frequent ints.
*/

function kMostFreqUniques(nums, k) {
    const mostFreqNums = [];
    const numToFrequency = {};
    const frequencyToNums = {};
    let maxFreq = 0;
  
    for (const num of nums) {
      if (numToFrequency.hasOwnProperty(num)) {
        numToFrequency[num]++;
  
        if (numToFrequency[num] > maxFreq) {
          maxFreq = numToFrequency[num];
        }
      } else {
        numToFrequency[num] = 1;
      }
    }
  
    // build a frequency table that is a reverse of the above to help avoid O(n^2)
    // since multiple ints can have the same frequency, value must be an array of the ints that have that frequency
    // since keys are strings, convert the numKey back to an int when adding it to the array
    for (const numKey in numToFrequency) {
      const frequency = numToFrequency[numKey];
  
      if (frequencyToNums.hasOwnProperty(frequency)) {
        frequencyToNums[frequency].push(+numKey);
      } else {
        // create the array with the first num found that has this frequency
        frequencyToNums[frequency] = [+numKey];
      }
    }
  
    let nextMostFreq = maxFreq;
  
    while (mostFreqNums.length < k && nextMostFreq > 0) {
      if (
        frequencyToNums.hasOwnProperty(nextMostFreq) &&
        frequencyToNums[nextMostFreq].length > 0
      ) {
        mostFreqNums.push(frequencyToNums[nextMostFreq].pop());
      } else {
        // no nums have this frequency, decr to check for next most freq
        nextMostFreq--;
      }
    }
  
    return mostFreqNums;
  }
  
  // Morley Tatro
  function kMostFrequent(arr, k) {
    const freqTable = {};
  
    for (let i = 0; i < arr.length; i++) {
      const elem = arr[i];
  
      if (!freqTable.hasOwnProperty(elem)) {
        freqTable[elem] = 1;
      } else {
        freqTable[elem]++;
      }
    }
  
    const ordered = [];
  
    for (const key in freqTable) {
      const freq = freqTable[key];
  
      if (typeof ordered[freq] === "undefined") {
        ordered[freq] = [+key];
      } else {
        ordered[freq].push(+key);
      }
    }
  
    const output = [];
  
    for (let i = ordered.length - 1; i >= 0; i--) {
      if (typeof ordered[i] === "undefined") continue;
      for (let j = 0; j < ordered[i].length; j++) {
        output.push(ordered[i][j]);
        if (output.length === k) return output;
      }
    }
  }
  
  console.log(kMostFreqUniques([1, 1, 2, 2, 3, 3], 3));