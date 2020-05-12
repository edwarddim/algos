// http://algorithms.dojo.news/static/Algorithms/index.html#LinkTarget_2140
/* 
  Array: Partition
  
  Assume you have access to a swap function or practice using array destructure notation to swap
  Params: arr, left, right
    - for now, left will be 0, and right will be the last idx
    - later these params will be used to specify a sub section of the array to partition
  Steps:
  1. Pick an item out of the arr to be your pivot value
    - usually the middle item or the last item
  2. Partition the array IN PLACE such that all values less than the pivot are to the left of it
  and all values greater than the pivot are to the right (not perfectly sorted)
  3. return: new idx of the pivot value
*/

const swap = require("./swap");

// src=https://itnext.io/a-sort-of-quick-guide-to-quicksort-and-hoares-partitioning-scheme-in-javascript-7792112c6d1
// Hoare’s partitioning scheme, named for Sir Charles Antony Richard Hoare, who developed the quicksort algorithm.
// does fewer swaps than many other techniques

//    [11, 8, 14, 3, 6, 2, 7]
// => [2, 8, 14, 3, 6, 11, 7] 11 & 2 swapped
// => [2, 3, 14, 8, 6, 11, 7] 3 & 8 swapped

function partitionHoare(arr, left, right) {
  const pivot = arr[Math.floor((left + right) / 2)];

  while (left <= right) {
    while (arr[left] < pivot && left <= right) {
      left++;
    }
    while (arr[right] > pivot) {
      right--;
    }
    if (left <= right) {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
      right--;
    }
  }
  return left;
}
// destructure syntax ex: arr = [1, 2, 3]
// let [first, second] = [arr[0], arr[1]];
// first & second are now variables equal to first and second items of arr respectively

// Lomuto partition scheme, it is less efficient than the Hoare partition scheme
//    [11, 8, 14, 3, 6, 2, 7]
// => [3, 8, 14, 11, 6, 2, 7] 11 & 3 swapped
// => [3, 6, 14, 11, 8, 2, 7] 8 & 6 swapped
// => [3, 6, 2, 11, 8, 14, 7] 2 & 14 swapped
// => [3, 6, 2, 7, 8, 14, 11] 7 & 11 swapped

function partitionLomuto(items, low, high) {
  const pivot = items[high];
  let i = low;

  for (let j = low; j < high; j++) {
    if (items[j] <= pivot) {
      swap(items, i, j);
      i++;
    }
  }
  swap(items, i, high);
  return i;
}

const a = [11, 8, 14, 3, 6, 2, 7];
// console.log(partition(a, 0, a.length - 1));
// console.log(partition2(a, 0, a.length - 1));
// console.log(partitionHoare(a, 0, a.length - 1, a.length - 1));
// console.log(a);

module.exports = {
  partitionHoare,
  partitionLomuto
};