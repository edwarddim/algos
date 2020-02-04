class Heap{
    constructor(){
        this.heap = []
    };
    printHeap(){
        console.log(this.heap)
    };
    size(){
        return this.heap.length;
    };
    insert(num){
        if(this.size() == 0){
            this.heap.push(num)
            return
        }
        this.heap.push(num)
        var insertIndex = this.heap.length-1
        while(this.heap[Math.floor(insertIndex/2)] > this.heap[insertIndex] ){
            var temp = this.heap[Math.floor(insertIndex/2)]
            this.heap[Math.floor(insertIndex/2)] = this.heap[insertIndex]
            this.heap[insertIndex] = temp
            insertIndex = Math.floor(insertIndex/2)
        }
    };
    extract(){
        let returnVal = this.heap[0]
        let maxInd = 0;
        this.heap[0] = this.heap.pop()
        let max = this.heap[0]
        while( max > this.heap[(maxInd*2)+1] || max > this.heap[(maxInd*2+2)] ){
            var leftChild = this.heap[(maxInd*2)+1]
            var rightChild = this.heap[(maxInd*2)+2]
            if(this.heap[(maxInd*2)+1] < this.heap[(maxInd*2)+2]){
                var temp = this.heap[maxInd]
                this.heap[maxInd] = this.heap[(maxInd*2)+1]
                this.heap[(maxInd*2)+1] = temp
                maxInd = (maxInd*2)+1
            }
            else{
                var temp = this.heap[maxInd]
                this.heap[maxInd] = this.heap[(maxInd*2)+2]
                this.heap[(maxInd*2)+2] = temp
                maxInd = (maxInd*2)+2
            }
        }
        return returnVal
    };
}

var heap = new Heap();
heap.insert(2)
heap.insert(4)
heap.insert(6)
heap.insert(8)
heap.insert(10)
heap.insert(5)
heap.printHeap()
console.log(heap.extract())
heap.printHeap()