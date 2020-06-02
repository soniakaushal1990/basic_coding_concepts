class Trie{
    constructor(){
        this.root={};
        this.endSymbol="*";
    }
    add(word){
        let current = this.root;
        for(const letter of word){
            if(!(letter in current)) current[letter]={};
            current=current[letter];
        }
        current[this.endSymbol]=word;
    }
}
let words =[
    "this",
     "is",
     "not",
    // "a",
    // "simple",
    // "boggle",
    // "board",
    // "test",
    // "REPEATED",
    // "NOTRE-PEATED"
];
let trie = new Trie();
for(let i=0;i<words.length;i++){
    trie.add(words[i]);
}

console.log(trie.root);