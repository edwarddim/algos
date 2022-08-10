

var invertBinaryTree = (root) => {
    const queue = []
    if(!root){
        return null
    }

    queue.push(root)

    while(queue.length > 0){
        currentNode = queue.shift()

        let temp = currentNode.right
        currentNode.right = currentNode.left
        currentNode.left = temp

        if(currentNode.left){
            queue.push(currentNode.left)
        }
        if(currentNode.right){
            queue.push(currentNode.right)
        }
    }
    return root
}