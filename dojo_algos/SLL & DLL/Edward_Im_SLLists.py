class Node:
    def __init__(self, value):
        self.value = value
        self.next = None

class SLLists:
    def __init__(self):
        self.head = None

    def index(self):
        if self.head == None:
            print("NO NODES")
            return
        count = 0
        runner = self.head
        while runner.next != None:
            runner = runner.next
            count = count + 1
        print(count)

    def print_all_val(self):
        if self.head == None:
            print('No Nodes')
            return self
        runner = self.head
        while runner.next != None:
            print(runner.value)
            runner = runner.next
        print(runner.value)

    def add_to_front(self, value):
        temp = self.head
        node = Node(value)
        self.head = node
        node.next = temp
        return self

    def add_to_end(self, value):
        if self.head == None:
            node = Node(value)
            self.head = node
            return self
        runner = self.head
        while runner.next != None:
            runner = runner.next
        node = Node(value)
        runner.next = node
        return self

    def add_to_mid(self, findvalue, value):
        prevrunner = self.head
        runner = self.head.next
        if prevrunner.value == findvalue:
            node = Node(value)
            self.head = node
            node.next = prevrunner
            return self
        while runner.value != findvalue:
            prevrunner = prevrunner.next
            runner = runner.next
        node = Node(value)
        prevrunner.next = node
        node.next = runner
        return self

    def remove_front_node(self):
        if self.head == None:
            print("NO NODES")
            return
        temp = self.head.next
        self.head = temp

    def remove_end_node(self):
        if self.head == None:
            print("NO NODES")
            return
        prevrunner = self.head
        runner = self.head.next
        while runner.next != None:
            prevrunner = prevrunner.next
            runner = runner.next
        prevrunner.next = None

    def remove_mid_node(self, value):
        if self.head == None:
            print("NO NODES")
            return
        prevrunner = self.head
        runner = self.head.next
        if prevrunner.value == value:
            self.head = prevrunner.next
            return
        while runner.value != value:
            prevrunner = prevrunner.next
            runner = runner.next
        prevrunner.next = runner.next

    def reverse_list(self):
        if self.head == None:
            print('No Nodes from Reverse List')
            return
        prevrunner = None
        nextrunner = None
        currentrunner = self.head
        while currentrunner != None:
            nextrunner = currentrunner.next
            currentrunner.next = prevrunner
            prevrunner = currentrunner
            currentrunner = nextrunner
        self.head = prevrunner
