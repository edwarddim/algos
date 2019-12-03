class SLNode{
    constructor(value){
        this.val = value
        this.next = null
    }
}
class SLQueue{
    constructor(){
        this.head = null
        this.tail = null
    }
    printList(){
        if(this.head == null){
            console.log("LIST EMPTY")
            return
        }
        var runner = this.head
        while(runner.next != null){
            console.log(runner.val)
            runner = runner.next
        }
        console.log(runner.val)
        console.log("HEAD IS: ", this.head)
        console.log("TAIL IS: ", this.tail)
    }
    enqueue(val){
        if(this.head == null){
            this.head = new SLNode(val)
            return
        }
        var runner = this.head
        while(runner.next != null){
            runner = runner.next
        }
        runner.next = new SLNode(val)
    }
    dequeue(){
        if(this.head == null){
            return null
        }
        var returnVal = this.head.val
        this.head = this.head.next
        return returnVal;
    }
    zipper(arr1, arr2){
        this.head = new SLNode(arr1[0])
        this.head.next = new SLNode(arr2[0])
        this.tail = this.head.next
        for(let i = 1; i < arr1.length; i++){
            this.tail.next = new SLNode(arr1[i])
            this.tail = this.tail.next
            this.tail.next = new SLNode(arr2[i])
            this.tail = this.tail.next
        }
    }
    size(){
        if(this.head == null){
            return 0
        }
        var count = 1
        var runner = this.head
        while(runner.next != null){
            count++
            runner = runner.next
        }
        return count
    }
    interleave(){
        if(this.head == null){
            return false;
        }
        var rightRunner = this.head
        var halfIndex = Math.floor(this.size()/2) - 1
        var count = 0
        var countIndex = 0
        while(countIndex < halfIndex){
            rightRunner = rightRunner.next
            countIndex++
        }
        rightRunner = rightRunner.next

        var leftRunner = this.head.next
        this.head.next = rightRunner
        this.tail = rightRunner
        rightRunner = rightRunner.next
        while(count < halfIndex){
            this.tail.next = leftRunner
            leftRunner = leftRunner.next
            this.tail = this.tail.next

            this.tail.next = rightRunner
            rightRunner = rightRunner.next
            this.tail = this.tail.next

            count++
        }
    }
}
module.exports = {
    queue : SLQueue
}

const list = new SLQueue()
// list.zipper([1,2,3] , [4,5,6])
list.enqueue(1)
list.enqueue(2)
list.enqueue(3)
list.enqueue(4)
list.enqueue(5)
// list.enqueue(6)
// console.log("---------------------------------")
// console.log("returning from dequeue: ", list.dequeue())
list.printList()
console.log("---------------------------------")
list.interleave()
list.printList()
