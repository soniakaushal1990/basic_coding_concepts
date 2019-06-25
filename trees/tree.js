class Node{
    constructor(data){
        this.data =data;
        this.children = [];
    }
    add(data){
        this.children.push(new Node(data));
    }
    remove(data){
       this.children = this.children.filter(elem=>{
            return elem.data !== data;
        });
    }

}
class Tree{
 constructor(){
     this.root = null;
 }
 traverseBF(tree){
  console.log(tree);
  const arr = [this.root];
  while(arr.length){
      
  }
 }
}
var node = new Node("10");
node.add("20");
node.add("30");
node.children[0].add("40");
node.children[1].add("50");

//Traverse the tree
var tree = new Tree();
tree.traverseBF(node);
//console.log(node.children[1]);




module.export={Tree,Node};