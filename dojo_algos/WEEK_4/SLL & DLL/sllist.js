class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}
class SLList{
    constructor(){
        this.head = null
    }
    getListLength(){
        if(this.head == null){
            console.log("NO NODES")
            return
        }
        var count = 0
        var runner = this.head
        while(runner.next != null){
            count++
            runner = runner.next
        }
        count++
        console.log(count)
    }
    printAllValues(){
        var runner = this.head
        while(runner.next != null){
            console.log(runner.value)
            runner = runner.next
        }
        console.log(runner.value)
    }
    addToFront(value){
        const temp = this.head
        var newNode = new Node(value)
        this.head = newNode
        this.head.next = temp
    }
    addToEnd(value){
        if(this.head == null){
            var newNode = new Node(value)
            this.head = newNode
            return
        }
        var runner = this.head
        while(runner.next != null){
            runner = runner.next
        }
        var newNode = new Node(value)
        runner.next = newNode
        return
    }
    reverseList(){
        var prevRunner = null
        var nextRunner = null
        var currentRunner = this.head
        while(currentRunner !=null){
            nextRunner = currentRunner.next
            currentRunner.next = prevRunner
            prevRunner = currentRunner
            currentRunner = nextRunner
        }
        this.head = prevRunner
    }
}

const list = new SLList();
list.addToEnd(2)
list.addToEnd(5)
list.addToEnd(7)
list.addToEnd(9)
list.addToFront(1)
// list.getListLength()
list.printAllValues()
console.log('-'*20)
list.reverseList()
list.printAllValues()