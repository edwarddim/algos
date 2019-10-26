var SLQueue = require('./SLQueue')
// var SLStack = require('./SLStack')

var slq = new SLQueue.queue();
// var sls = new SLStack();

slq.enqueue(1)
slq.enqueue(2)
slq.enqueue(3)
slq.enqueue(4)
slq.enqueue(5)
slq.enqueue(6)
slq.printList();