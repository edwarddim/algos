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
}
module.exports = {
    queue : SLQueue
}

// const list = new SLQueue()
// list.enqueue(1)
// list.enqueue(2)
// list.enqueue(3)
// list.enqueue(4)
// list.enqueue(5)
// list.enqueue(6)
// console.log("---------------------------------")
// list.printList()
// console.log("returning from dequeue: ", list.dequeue())
// console.log("---------------------------------")
// list.printList()
