
//Time complexity O(v+e)
//Space O(v)
class Node{
    constructor(cost){
        this.cost=cost;
        this.children=[];
    }
    addCost(name){
        this.children.push(new Node(name));
        return this;
    }
    depthFirstSearch(){
    
    let res = [];
    
    if(node.children.length == 0) return node.cost ; 

    for(let i = 0 ; i < node.children.length ; i++){
       
    let cost =  this.depthFirstSearch(node.children[i]);
       res.push(cost);
    }   
    let min = res[0];
    for(let i = 1; i < res.length ;i++){    
      min = Math.min(min,res[i]);
    }
      return  node.cost + min;
    }
}
let node = new Node("1");
node.addCost("2");
node.addCost("3");
node.children[0].addCost("4");
node.children[1].addCost("5");
console.log(node);
let array=[];
console.log(node.depthFirstSearch());
console.log(node);