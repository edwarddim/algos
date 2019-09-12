function almostIncreasingSequence(seq) {
    var bad=0
    for(var i=1;i<seq.length;i++){
      if(seq[i]<=seq[i-1]) {
        bad++
        if(bad>1) return false
        if(seq[i]<=seq[i-2]&&seq[i+1]<=seq[i-1]) return false
      }
    }
    return true
  }
console.log(almostIncreasingSequence([1, 3, 2, 1]))
console.log(almostIncreasingSequence([1, 2, 3, 4, 3, 6]))
// almostIncreasingSequence()
// almostIncreasingSequence()
// almostIncreasingSequence()
// almostIncreasingSequence()
