/**
 * @param {char[]} letters
 * @return {string}
 */


const thirdMostFrequentElement = function(arr) {
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
            console.log(ordered)
        } else {
            ordered[freq].push(+key);
        }
    }
};

thirdMostFrequentElement([1, 1, 1, 2, 2, 3])
// thirdMostFrequentElement([0, 0, 0, 2, 2, 3])
// thirdMostFrequentElement([1, 1, 2, 2, 3, 3])