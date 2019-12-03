class BSTNode{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
};
class BST{
    constructor(){
        this.root = null
    };
    inorder(node){
        if(node != null){
            this.inorder(node.left)
            console.log(node.value)
            this.inorder(node.right)
        }
    };
    preorder(node){
        if(node != null){
            console.log(node.value)
            this.preorder(node.left)
            this.preorder(node.right)
        }
    };
    postorder(node){
        if(node != null){
            this.postorder(node.left)
            this.postorder(node.right)
            console.log(node.value)
        }
    };
    add(value){
        if(this.root == null){
            this.root = new BSTNode(value)
            return
        }
        var runner = this.root
        while(runner != null){
            if(value < runner.value){
                if(runner.left == null){
                    runner.left = new BSTNode(value)
                    return
                }
                else{
                    runner = runner.left
                }
            }
            else if(value > runner.value){
                if(runner.right == null){
                    runner.right = new BSTNode(value)
                    return
                }
                else{
                    runner = runner.right
                }
            }
            else{
                console.log("NO DUPES", value)
                return
            }
        }
    };
    findMin(node){
        var runner = node;
        while(runner.left != null){
            runner = runner.left
        }
        return runner
    };
    findMax(node){
        var runner = node;
        while(runner.right !=null){
            runner = runner.right
        }
        return runner
    };
    size(node){
        if(node == null) return 0
        else return(this.size(node.left) + 1 + this.size(node.right))
    };
    contains(value){
        if(this.root == null) return false
        if(this.root.value == value) return true
        else{
            var runner = this.root
            while(runner != null){
                if(value == runner.value){
                    return true
                }
                else{
                    if(value < runner.value){
                        runner = runner.left
                    }
                    else{
                        runner = runner.right
                    }
                }
            }
            return false;
        }
    };
    height(node){
        if(node == null) return 0
        else{
            var leftHeight = this.height(node.left)
            var rightHeight = this.height(node.right)
            if(leftHeight > rightHeight) return leftHeight+1
            else return rightHeight+1
        }
    };
    isBalanced(node){
        if(node == null) return true
        var leftHeight = this.height(node.left)
        var rightHeight = this.height(node.right)
        if(Math.abs(leftHeight - rightHeight) <= 1 && this.isBalanced(node.left) == true && this.isBalanced(node.right) == true) return true
        return false
    };
    delete(node, value){
        if(node == null) return false
        else if(value < node.value) node.left = this.delete(node.left, value)
        else if(value > node.value) node.right = this.delete(node.right, value)
        else{
            // CASE 1: Deleting with ONE child or NO child
            if(node.left == null){
                var temp = node.right
                node = null
                console.log("Deletion from node.left==null")
                return temp
            }
            else if(node.right == null){
                var temp = node.left
                node = null
                console.log("Deletion node.right==null")
                return temp
            }
            // CASE 2: Deleting with two child (finding MIN of RIGHT SUBTREE)
            else{
                var temp = this.findMin(node.right)
                console.log("LOW VAL FROM TEMP: ", temp.value)
                node.value = temp.value
                node.right = this.delete(node.right, temp.value)
                console.log("Deletion from node with two childs")
            }
        }
        return node
    };
    sortedArrtoBST(arr){
        var mid = Math.floor(arr.length/2)
        // console.log("ARR at beginning", arr)
        if(arr.length < 1){
            console.log("NOT ARRAY")
            return null
        }
        // console.log("MID# at beginning: ", mid)
        var root = new BSTNode(arr[mid])
        // console.log("LEFT ARRAY GOING TO RECUR", arr.slice(0,mid))
        // console.log("RIGHT ARRAY GOING TO RECUR", arr.slice(mid, arr.length))
        root.left = this.sortedArrtoBST(arr.slice(0,mid))
        root.right = this.sortedArrtoBST(arr.slice(mid+1, arr.length))
        return root
    }
}

var bst = new BST();
// console.log("NEW BST: ", bst.sortedArrtoBST([1,2,3,4,5,6,7,8,9,10]))
bst.root = bst.sortedArrtoBST([1,2,3,4,5,6,7,8,9,10])

// bst.add(23);
// bst.add(45);
// bst.add(16);
// bst.add(37);
// bst.add(3);
// bst.add(99);
// bst.add(22);
// bst.add(38);
// bst.add(100);
// bst.add(102);
// bst.add(200);
// bst.add(300);
// bst.add(400);
// bst.add(500);
// bst.add(600);
// bst.inorder()
console.log("BST Size is: ", bst.size(bst.root))


// bst.delete(bst.root, 23)
// console.log(bst.contains(23))
// console.log(bst.contains(45))
// console.log(bst.contains(16))
// console.log(bst.contains(37))
// console.log(bst.contains(3))
// console.log(bst.contains(99))
// console.log(bst.contains(22))
// console.log(bst.contains(38))
// console.log(bst.contains(2))
// console.log("Max height of BST is: ", bst.height(bst.root))

// console.log("BST Size is: ", bst.size(bst.root))

// console.log('-' * 20)
// bst.inorder(bst.root)

// console.log('--------------------------------------------')
// bst.preorder(bst.root)

// console.log('-'*20)
// bst.postorder(bst.root)

// console.log(bst.isBalanced(bst.root))