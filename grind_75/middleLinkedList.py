# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def middleNode(self, head: Optional[ListNode]) -> Optional[ListNode]:
        list_length = 0
        runner = head
        while runner != None:
            list_length += 1
            runner = runner.next
        middle = (list_length // 2) + 1
        runner = head
        for i in range(1,middle):
            runner = runner.next
        return runner
    
    def middleNode(self, head: Optional[ListNode]) -> Optional[ListNode]:
        slow_pointer = fast_pointer = head
        while fast_pointer is not None and fast_pointer.next is not None:
            slow_pointer = slow_pointer.next
            fast_pointer = fast_pointer.next.next
        return slow_pointer
