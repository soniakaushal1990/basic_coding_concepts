
//Time complexity O(v+e)
//Space O(v)
class Node{
    constructor(name){
        this.name=name;
        this.children=[];
    }
    addChild(name){
        this.children.push(new Node(name));
        return this;
    }
    depthFirstSearch(array){
        array.push(this.name);
        for(const child of this.children){
            child.depthFirstSearch(array);
        }
        return array;
    }
}
let node = new Node("1st node");
node.addChild("2nd Node");
node.addChild("3rd Node");
node.children[0].addChild("4th node");
node.children[1].addChild("5th node");
console.log(node);
let array=[];
console.log(node.depthFirstSearch(array));
//console.log(node);