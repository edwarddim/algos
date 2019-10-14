class SLNode{
    constructor(value){
        this.value = value
        this.next = null
    }
}
class SLStack{
    constructor(){
        this.head = null
    }
    push(value){
        if(this.head == null){
            this.head = new SLNode(value)
        }
        var runner = this.head
        while(runner.next != null){
            runner = runner.next
        }
        runner.next = new SLNode(value)
    }
    pop(){
        if(this.head == null){
            return null
        }
        var runnner = this.head
        while(runner.next.next != null){
            runner = runner.next
        }
        var returnVal = this.runner.next.value
        this.runner.next = null
        return returnVal
    }
    top(){
        if(this.head == null){
            return null
        }
        var runner = this.head
        while(runner.next != null){
            runner = runner.next
        }
        return runner.value
    }
}