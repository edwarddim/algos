class TrieNode{
    constructor(){
        this.children = {}
        this.isEndOfWord = false
    }
}
// CHANGE THE CHILDREN ATTRIBUTE SO THAT YOU ONLY ADD KEYS AS YOU ADD LETTERS
class TrieSet{
    constructor(){
        this.root = null
    }
    insert(string){
        var wordLen = string.length
        var runner = this.root
        // ADDING A WORD WHEN THE TRIE IS EMPTY
        if(this.root == null){
            this.root = new TrieNode()
            var runner = this.root
            for(let i = 0; i < wordLen; i++){
                runner.children[string[i]] = new TrieNode()
                runner = runner.children[string[i]]
            }
            runner.isEndOfWord = true
            return
        }
        // ADDING A WORD WHEN THE TRIE IS NOT EMPTY
        for(let i = 0; i < wordLen; i++){
            if(runner.children[string[i]] == null){
                runner.children[string[i]] = new TrieNode()
                runner = runner.children[string[i]]
            }
            else{
                runner = runner.children[string[i]]
            }
        }
        runner.isEndOfWord = true
    };
    exists(string){
        var wordLen = string.length
        var runner = this.root
        if(this.root == null){
            console.log("TRIE IS EMPTY")
            return
        }
        for(let i =0; i < wordLen; i++){
            if(runner.children[string[i]] == null){
                console.log("WORD DOES NOT EXIST")
                return
            }
            runner = runner.children[string[i]]
        }
        if(runner.isEndOfWord == false ){
            console.log("THE CHARS ARE THERE BUT DOES NOT EXIST AS WORD")
            return
        }
        console.log("WORD EXISTS WITHIN TRIE")
    };
    //----------------- AUTOCOMPLETE-FINSIHED--------------------//
    autocomplete(string){
        var wordLen = string.length
        var runner = this.root
        if(this.root == null){
            console.log("TRIE IS EMPTY")
            return
        }
        for(let i = 0; i < wordLen; i++){
            if(runner.children[string[i]] != null){
                runner = runner.children[string[i]]
            }
        }
        console.log("AUTOCOMPLETE ARRAY: ", this.autoHelper(string, runner))
    };
    autoHelper(string, node){
        var returnArr = []
        if(node.isEndOfWord == true){
            returnArr.push(string)
        }
        for(let key in node.children){
            returnArr = returnArr.concat( this.autoHelper(string + key, node.children[key]) )
        }
        return returnArr;
    };
    // -------------------- DISPLAY-FINISHED------------------------//
    display(){
        var runner = this.root;
        var arr = []
        for(let key in runner.children){
            arr = arr.concat(this.displayHelper(key, runner.children[key]))
        }
        console.log("ALL WORDS WITHIN THE TREE: ", arr);
        
    }
    displayHelper(string, node){
        var returnArr = []
        if(node.isEndOfWord == true){
            returnArr.push(string)
        }
        for(let key in node.children){
            returnArr = returnArr.concat( this.autoHelper(string + key, node.children[key]) )
        }
        return returnArr;
    }
    // ---------------REMOVE WORD-FINISHED--------------------------//
    remove(key){
        var node = this.root
        console.log(this.removeHelper(node, key));
    };
    removeHelper(node, key){
        var size = Object.keys(node.children).length;
        if(key.length == 0){
            node.isEndOfWord = false;
            return
        }
        if(size == 0){
            return true
        }
        var curChar = key.slice(0,1)
        if(this.removeHelper(node.children[curChar], key.slice(1))){
            delete node.children[curChar]
            if(node.children.length == 0){
                return true
            }
            else{
                return false
            }
        }
    };
}
var trie = new TrieSet();
trie.insert("tom")
trie.insert("tomb")
trie.insert("tomato")
trie.insert("tomatoes")
trie.display();
// trie.exists('tomb')
trie.remove("tomatoes")
// trie.autocomplete('tom')
trie.display();