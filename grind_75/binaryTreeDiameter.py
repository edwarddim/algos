# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def diameterOfBinaryTree(self, root: Optional[TreeNode]) -> int:
        return self.height(root.left) + self.height(root.right)
    

    def height(self, root: Optional[TreeNode]) -> int:
        if not root:
            return 0
        left_height = self.height(root.left)
        right_height = self.height(root.right)
        return max(left_height,right_height) + 1


    # def diameterOfBinaryTree(self, root):
    #     diameter = [0]
        
    #     def helper(node):
    #         if not node:
    #             return 0
            
    #         left = helper(node.left)
    #         right = helper(node.right)
    #         diameter[0] = max(diameter[0], left + right)
            
    #         return max(left, right) + 1
        
    #     helper(root)
    #     return diameter[0]