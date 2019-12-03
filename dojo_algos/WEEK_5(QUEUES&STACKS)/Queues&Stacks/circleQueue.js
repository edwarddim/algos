class SLNode{
    constructor(value){
        this.val = value
        this.next = null
    }
}

class CircleQueue{
    constructor(length){
        this.size = length
        this.head = -1
        this.tail = -1
        this.array = new Array(length)
    }
    displayValues(){
        for(let i = 0; i < this.array.length; i++){
            console.log(this.array[i])
        }
    }
    enqueue(value){
        if( (this.tail + 1)% this.size == this.head  ){
            console.log("QUEUE IS FULL")
            return
        }
        else if(this.head == -1){
            this.head = 0
            this.tail = 0
            this.array[this.tail] = value
        }
        else{
            this.tail = (this.tail + 1) % this.size
            this.array[this.tail] = value
        }
    }
    dequeue(){
        if(this.front == -1){
            console.log("QUEUE IS EMPTY")
        }
        else if(this.head == this.tail){
            var returnVal = this.array[this.haead]
            this.array[this.haead] = null
            this.head = -1
            this.tail = -1
            return returnVal
        }
        else{
            var returnVal = this.array[this.haead]
            this.head = (this.head + 1) % this.size
            return returnVal
        }
    }
}

const list = new CircleQueue(10)
list.enqueue(1)
list.enqueue(2)
list.enqueue(3)
list.enqueue(4)
list.enqueue(5)
list.displayValues()