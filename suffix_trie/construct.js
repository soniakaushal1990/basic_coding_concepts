class SuffixTrie {
    constructor(string) {
      this.root = {};
      this.endSymbol = '*';
      this.populateSuffixTrieFrom(string);
    }
  
    populateSuffixTrieFrom(string) {
      for(let i=0;i < string.length;i++){
              this.insertSubstringStartingAt(i,string);
          }
    }
      insertSubstringStartingAt(i,string){
          let node =  this.root;
          for(let j=i;j<string.length;j++){
              const letter = string[j];
              if(!(letter in node)) node[letter]={};
              node = node[letter];
             
          }
          node[this.endSymbol]=true;
   

      }
  
    contains(string) {
      let node=this.root;  
          for(const letter of string){
              if(!(letter in node)) return false;
              console.log(letter);
              node=node[letter];
              console.log(node);
          }
          return this.endSymbol in node;
    }
  }
  const word1 = 'babc';
const test1 = new SuffixTrie(word1);
console.log(test1.contains("bc"));
//Sconsole.log(test1);

