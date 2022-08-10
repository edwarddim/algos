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
 * @return {number}
 */
var diameterOfBinaryTree = function (root) {
    if(!root) return 0;
    const currentDiameter = calcuateDiameter(root)
    const leftDiameter = diameterOfBinaryTree(root.left)
    const rightDiamater = diameterOfBinaryTree(root.right)
    return Math.max(currentDiameter, leftDiameter, rightDiamater)
};

const calcuateDiameter = function(node){
    return height(node.left) + height(node.right)
}

const height = function(node){
    if(!node) return 0;
    const leftHeight = height(node.left)
    const rightHeight = height(node.right)
    return (leftHeight > rightHeight) ? leftHeight : rightHeight;
}