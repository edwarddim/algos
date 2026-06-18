# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def mergeTwoLists(self, list1: Optional[ListNode], list2: Optional[ListNode]) -> Optional[ListNode]:
        runner1 = list1
        runner2 = list2

        if runner1 == None:
            return runner2
        elif runner2 == None:
            return runner1
        
        current = ListNode()
        dummy = current
        while runner1 and runner2:
            if runner1.val < runner2.val:
                current.next = runner1
                runner1 = runner1.next
            else:
                current.next = runner2
                runner2 = runner2.next
            current = current.next
        if not runner1:
            current.next = runner2
        else:
            current.next = runner1
        return dummy.next
