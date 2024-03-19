# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        prev_runner = None
        runner = head
        while runner != None:
            next_runner = runner.next
            runner.next = prev_runner
            prev_runner = runner
            runner = next_runner
        return prev_runner