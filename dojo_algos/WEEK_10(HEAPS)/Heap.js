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
        var parentIndex = Math.floor((insertIndex - 1)/2)
        while(this.heap[parentIndex] > this.heap[insertIndex] ){
            var temp = this.heap[parentIndex]
            this.heap[parentIndex] = this.heap[insertIndex]
            this.heap[insertIndex] = temp
            insertIndex = parentIndex
            parentIndex = Math.floor((parentIndex - 1)/2)
        }
    };
    extract(){
        let returnVal = this.heap[0]
        let maxInd = 0;
        this.heap[0] = this.heap.pop()
        let max = this.heap[0]
        var leftChildInd = (maxInd*2) + 1
        var rightChildInd = (maxInd*2) + 2
        while( max > this.heap[leftChildInd] || max > this.heap[rightChildInd] ){
            if(this.heap[leftChildInd] < this.heap[rightChildInd]){
                // SWAP LEFT CHILD WITH CURRENT MAX
                var temp = this.heap[maxInd]
                this.heap[maxInd] = this.heap[leftChildInd]
                this.heap[leftChildInd] = temp
                // RESET MAX INDEX AND LEFT AND RIGHT CHILD INDEX
                maxInd = (maxInd*2)+1
                leftChildInd = (maxInd*2) + 1
                rightChildInd = (maxInd*2) + 2
            }
            else{
                var temp = this.heap[maxInd]
                this.heap[maxInd] = this.heap[rightChildInd]
                this.heap[rightChildInd] = temp
                maxInd = (maxInd*2)+2
                leftChildInd = (maxInd*2) + 1
                rightChildInd = (maxInd*2) + 2
            }
        }
        return returnVal
    };
}
    // SORTED ARRAY TO HEAP
    

    // HEAP SORT

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