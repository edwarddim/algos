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
    moveMinToFront(){
        if(this.head == null){
            return false
        }
        var minNode = null
        var runner = this.head
        var min = this.head.value
        while(runner.next != null){
            if(runner.next.value < min){
                min = runner.next.value
                minNode = runner
            }
            runner = runner.next
        }
        var newNode = new Node(minNode.next.value)
        newNode.next = this.head
        this.head = newNode
        minNode.next = minNode.next.next
    }
    moveMaxToBack(){
        if(this.head == null){
            return false
        }
        var maxNode = null
        var runner = this.head
        var max = this.head.value
        while(runner.next != null){
            if(runner.next.value > max){
                max = runner.next.value
                maxNode = runner
            }
            runner = runner.next
        }
        var newNode = new Node(maxNode.next.value)
        runner.next = newNode
        maxNode.next = maxNode.next.next
    }
    deleteMiddleNode(){
        console.log("DELETE MIDDLE NODE")
    }
    // PARTITION A LINKED LIST AROUND A VALUE X, SUCH THAT ALL NODE LESS THAN X
    // COME BEFORE ALL NODES GREATER THAN OR EQUAL TO X
    // INPUT: 3->5->8->5->->10->2->1
    // OUTPUT: 3->1->2  ->   10->5->5->8
    partition(num){
        var leftPartitionHead = null
        var leftRunner = null
        var rightPartitionHead = null
        var rightRunner = null
        if(this.head == null) return false
        var runner = this.head
        while(runner.next != null){
            if(runner.value < num){
                if(leftPartitionHead == null){
                    leftPartitionHead = runner
                    leftRunner = leftPartitionHead
                }
                else{
                    leftRunner.next = runner
                    leftRunner = leftRunner.next
                }
            }
            else{
                if(rightPartitionHead == null){
                    rightPartitionHead = runner
                    rightRunner = rightPartitionHead
                }
                else{
                    rightRunner.next = runner
                    rightRunner = rightRunner.next
                }
            }
            runner = runner.next
        }
        if(runner.value < num){
            leftRunner.next = runner
            leftRunner = leftRunner.next
        }
        else{
            rightRunner.next = runner
            rightRunner = rightRunner.next
        }
        rightRunner.next = null
        this.head = leftPartitionHead
        leftRunner.next = rightPartitionHead
    }
}

const list = new SLList();
list.addToEnd(5)
list.addToEnd(9)
list.addToEnd(2)
list.addToEnd(5)
console.log('-------------------------------------------------')
list.printAllValues()
// list.moveMinToFront()
list.moveMaxToBack()
console.log('-------------------------------------------------')
list.printAllValues()