/* 
  Array: Quick Sort
  Create a function that uses yesterday’s partition to sort an array in-place. With yesterday’s code plus a very few new lines, you will implement QuickSort! What are the run-time and space complexities of your quickSortArr implementation?
  Time Complexity
    - Best: O(n log(n))
    - Average: O(n log(n))
    - Worst: O(n^2)
  
*/

// visualized https://www.hackerearth.com/practice/algorithms/sorting/quick-sort/visualize/
// src=https://itnext.io/a-sort-of-quick-guide-to-quicksort-and-hoares-partitioning-scheme-in-javascript-7792112c6d1

/* 
  Steps:
    - recursively partition the array
    - start by partitioning the full array
    - then partition the left side of the array and the right side, recursively
*/

const { partitionHoare, partitionLomuto } = require("./partition");

function quickSort(arr, left = 0, right = arr.length - 1) {
  // base case to stop recursion
  if (left >= right) {
    return;
  }

  const pivotIdx = partitionHoare(arr, left, right);

  quickSort(arr, left, pivotIdx - 1); // left of pivot
  quickSort(arr, pivotIdx, right); // right of pivot

  return arr;
}

const a = [11, 8, 14, 3, 6, 2, 7];
console.log(a);
console.log(quickSort(a));