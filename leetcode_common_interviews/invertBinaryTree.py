"""
Approach 2: Iterative
Alternatively, we can solve the problem iteratively, in a manner similar to breadth-first search.

Algorithm

The idea is that we need to swap the left and right child of all nodes in the tree. 
So we create a queue to store nodes whose left and right child have not been swapped yet. 
Initially, only the root is in the queue. 
As long as the queue is not empty, remove the next node from the queue, swap its children, and add the children to the queue. 
Null nodes are not added to the queue. Eventually, the queue will be empty and all the children swapped, and we return the original root.
"""

class Solution:
    def invertTree(self, root: Optional[TreeNode]) -> Optional[TreeNode]:
        if not root:
            return None
        
        queue = collections.deque([root])
        while queue:
            current = queue.popleft()
            current.left, current.right = current.right, current.left
            
            if current.left:
                queue.append(current.left)
            
            if current.right:
                queue.append(current.right)
        
        return root