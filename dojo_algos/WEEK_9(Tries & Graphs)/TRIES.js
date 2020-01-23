class TrieNode{
    constructor(){
        this.children = {
            'a':null,
            'b':null,
            'c':null,
            'd':null,
            'e':null,
            'f':null,
            'g':null,
            'h':null,
            'i':null,
            'j':null,
            'k':null,
            'l':null,
            'm':null,
            'n':null,
            'o':null,
            'p':null,
            'q':null,
            'r':null,
            's':null,
            't':null,
            'u':null,
            'v':null,
            'w':null,
            'x':null,
            'y':null,
            'z':null,
        }
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
        if(runner.isEndOfWord == false){
            console.log("THE CHARS ARE THERE BUT DOES NOT EXIST AS WORD")
            return
        }
        console.log("WORD EXISTS WITHIN TRIE")
    };
    // autocomplete(string){
    //     var wordLen = string.length
    //     var runner = this.root
    //     if(this.root == null){
    //         console.log("TRIE IS EMPTY")
    //         return
    //     }
    //     for(let i = 0; i < wordLen; i++){
    //         if(runner.children[string[i]] != null){
    //             runner = runner.children[string[i]]
    //         }
    //     }
    // };
}


var trie = new TrieSet();
trie.insert("tom")
trie.insert("tomato")