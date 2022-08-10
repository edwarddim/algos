/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number}
 */
 var pathSum = function(root, targetSum) {
    // TREE IS EMPTY
    if(!root) return 0
    // calcualatePath for the CURRENT NODE
    // TRAVERSE THROUGH THE ENTIRE TREE BY GOING LEFT AND RIGHT
    return(
        calculatePath(root, targetSum) + pathSum(root.left, targetSum) + pathSum(root.right, targetSum)
    )
};

var calculatePath = function(root, targetSum){
    // BASE CASE FOR PATH ENDING
    if(!root) return 0
    // FOUND A PATH IF THE CURRENT val IS EQUAL TO targetSum(targetSum has been changing )
    const value = (root.val === targetSum) ? 1 : 0;
    return(
        value + calculatePath(root.left, targetSum - root.val) + calculatePath(root.right, targetSum - root.val)
    )
}