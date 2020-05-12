/*
  Given two arrays of ints
  return the symmetric differences, (aka disjunctive union)
    - these are the elements which are in either of the sets and not their intersection (the union without the intersection)
      think of a venn diagram filled in except the ovlerapping middle part is not filled in (the intersection is excluded)
    - i.e., if an element is in at least one of the arrays, but not in any other, it should be included
  Examples:
  Input: [1, 2], [2, 1]
  Output: []
  Input: [1, 2, 3], [4, 5, 6]
  Output: [1, 2, 3, 4, 5, 6]
  Input: [4, 1, 2, 3, 4], [1, 2, 3, 5, 5]
  Output: [4, 5]
  Bonus: Make it work when given a set of sets (array of arrays of ints)
  
*/

function deltaOfTwoSets(setA, setB) {
    const symDiff = [];
  
    for (const n of setA) {
      if (setB.includes(n) === false && symDiff.includes(n) === false) {
        symDiff.push(n);
      }
    }
  
    for (const n of setB) {
      if (setA.includes(n) === false) {
        symDiff.push(n);
      }
    }
    return symDiff;
  }
  
  // O(n) - delete from obj is O(1) constant time
  function deltaOfTwoSetsHashTable(setA, setB) {
    const symDiffHash = {};
  
    for (const num of setA) {
      // the key becomes the num as a string, so store it as a val as well to avoid
      // having to parseInt the key when we want an int
      symDiffHash[num] = num;
    }
  
    for (const num of setB) {
      if (symDiffHash.hasOwnProperty(num)) {
        delete symDiffHash[num];
      } else {
        symDiffHash[num] = num;
      }
    }
    return Object.values(symDiffHash);
  }
  
  function deltaOfSetsHahTable(sets) {
    if (sets.length < 2) {
      return [];
    }
  
    const symDiffHash = {};
  
    for (const set of sets) {
      for (const num of set) {
        if (symDiffHash.hasOwnProperty(num)) {
          delete symDiffHash[num];
        } else {
          symDiffHash[num] = num;
        }
      }
    }
  
    return Object.values(symDiffHash);
  }