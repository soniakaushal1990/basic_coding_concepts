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
    traverseBF(){
        const arr = [this.root];
    //   console.log(arr);
       while(arr.length){
         const node = arr.shift();  
         arr.push(...node.children);
       }
       console.log(arr);
    }

}
 const node = new Node("10");
 node.add("20");
 node.children[0].add(70);
 node.add("30");
 node.add("40");
 node.add("50");
 console.log(node.children[0]);
 const tree = new Tree();
 tree.root = node;
tree.traverseBF();
//console.log(tree.root);






module.export={Tree,Node};

