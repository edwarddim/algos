class Node:
    def __init__(self, value):
        self.value = value
        self.prev = None
        self.next = None

class DLLists:
    def __init__(self):
        self.head = None
        self.tail = None

    def print_vals_forward(self):
        if self.head == None:
            print("NO NODES for print_val_forward")
            return
        runner = self.head
        while runner.next != None:
            print(runner.value)
            runner = runner.next
        print(runner.value)

    def print_val_backward(self):
        if self.head == None:
            print("NO NODES for print_val_backward")
            return
        runner = self.tail
        while runner.prev != None:
            print(runner.value)
            runner = runner.prev
        print(runner.value)

    def add_to_front(self, value):
        if self.head == None:
            node = Node(value)
            self.head = node
            self.tail = node
            return self
        temp = self.head
        node = Node(value)
        self.head = node
        node.next = temp
        temp.prev = node

    def add_to_end(self, value):
        if self.head == None:
            node = Node(value)
            self.head = node
            self.tail = node
            return self
        node = Node(value)
        self.tail.next = node
        node.prev = self.tail
        self.tail = node

    def prepend_to_value(self, findvalue, value):
        if self.head == None:
            print("NO NODES for prepend_to_value")
            return self
        elif self.head.value == findvalue:
            temp = self.head
            node = Node(value)
            self.head = node
            node.next = temp
            return self
        runner = self.head
        while runner.value != findvalue:
            runner = runner.next
        node = Node(value)
        runner.prev.next = node
        node.next = runner

    def remove_front(self):
        if self.head == None:
            print("NO NODES for remove_front")
            return self
        self.head = self.head.next

    def remove_end(self):
        if self.tail == None:
            print("NO NODES for remove_end")
            return self
        self.tail = self.tail.prev
        self.tail.next = None

    def remove_value(self, findvalue):
        if self.head.value == findvalue:
            self.head = self.head.next
            return self
        elif self.tail.value == findvalue:
            self.tail = self.tail.prev
            self.tail.next = None
            return self
        runner = self.tail
        while runner.value != findvalue:
            runner = runner.prev
        runner.prev.next = runner.next
    
    def index_of_list(self):
        count = 0
        runner = self.head
        while runner.next != None:
            runner = runner.next
            count = count + 1
        return count

    def insert_before(self, value, index):
        if index == 0:
            node = Node(value)
            node.next = self.head
            self.head.prev = node
            self.head = node
            return self
        elif index > self.index_of_list():
            print("INPUTED INDEX IS OUT OF RANGE")
            return self
        count = 0
        runner = self.head
        while count < index:
            runner = runner.next
            count = count + 1
        node = Node(value)
        runner.prev.next = node
        node.prev = runner.prev
        node.next = runner
        runner.prev = node

    def insert_after(self, value, index):
        if index == self.index_of_list():
            node = Node(value)
            self.tail.next = node
            node.prev = self.tail
            self.tail = node
            return self
        elif index < 0:
            print("INDEX IS OUT OF RANGE OF LIST")
            return self
        count = self.index_of_list()
        runner = self.tail
        while count > index:
            runner = runner.prev
            count = count - 1
        node = Node(value)
        runner.next.prev = node
        node.next = runner.next
        node.prev = runner
        runner.next = node

list = DLLists()
list.add_to_end(3)
list.add_to_end(6)
list.add_to_end(9)
list.add_to_end(12)
list.add_to_end(15)
list.add_to_end(18)
list.insert_after(89, 0)
# list.insert_before(89, 5)
# list.remove_value(18)
# list.remove_front()
# list.remove_end()
list.print_vals_forward()
# print(list.index_of_list())
# list.print_val_backward()
print("Head Value is: ", list.head.value)
print("Tail Value is: ", list.tail.value)
print("The index of the list goes to: ", list.index_of_list())