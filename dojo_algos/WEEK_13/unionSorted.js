/* 
  Union Sorted Arrays
  Efficiently combine two already-sorted multiset arrays
  into a new sorted array containing the multiset union.
  Unions by default will take the set of dupes
  that has the highest occurences from one array.
  Input: [1,2,2,2,7], [2,2,6,6,7]
  Output: [1,2,2,2,6,6,7]
  Explanation: 2 occurs at most in ONE set, three times, so 2 is included three times
    6 occurs at most two times in one set, so 6 is included 2 times, 7 occurs at most 1 time, so one 7 is included
*/

function unionSortedArrs(arr1, arr2) {
    const res = [];
    let idx1 = (idx2 = 0);
  
    while (idx1 < arr1.length || idx2 < arr2.length) {
      if (idx1 === arr1.length) {
        res.push(arr2[idx2++]);
        continue;
      } else if (idx2 === arr2.length) {
        res.push(arr1[idx1++]);
        continue;
      }
  
      if (arr1[idx1] === arr2[idx2]) {
        res.push(arr1[idx1++]);
        idx2++; // since both were same, increment both
      } else if (arr1[idx1] < arr2[idx2]) {
        res.push(arr1[idx1++]);
      } else {
        res.push(arr2[idx2++]);
      }
    }
    return res;
  }
  
  function unionSortedArrays(arr1, arr2) {
    let idx1 = (idx2 = 0);
    const ret = [],
      len1 = arr1.length,
      len2 = arr2.length;
  
    while (idx1 < len1 && idx2 < len2) {
      const n1 = arr1[idx1],
        n2 = arr2[idx2];
  
      if (n1 === n2) {
        ret.push(n1);
        idx1++;
        idx2++;
      } else if (n1 < n2) {
        ret.push(n1);
        idx1++;
      } else {
        ret.push(n2);
        idx2++;
      }
    }
  
    // arrays might be different lengths, if any elems are remaining, concat them
    return ret.concat(arr1.slice(idx1)).concat(arr2.slice(idx2));
  }