from collections import deque

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def levelOrder(self, root: Optional[TreeNode]) -> List[List[int]]:
        if root is None:
            return []
        tree_q = deque([root])

        tree_list = []
        while tree_q:
            current_list = []
            current_level_length = len(tree_q)

            for _ in range(current_level_length):
                node = tree_q.popleft()
                current_list.append(node.val)

                if node.left is not None:
                    tree_q.append(node.left)
                if node.right is not None:
                    tree_q.append(node.right)
            tree_list.append(current_list)
        return tree_list
