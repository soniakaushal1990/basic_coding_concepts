class Node{
    constructor(data){
        this.data=data;
        this.children=[];
    }
    addchild(data){
        this.children.push(new Node(data));
        return this;
    }
//Time Complexity O(v+e) | Space O(v)
    breadthFirstSearch(array){
        const queue = [this];
        while(queue.length>0){
           const current = queue.shift();
           array.push(current.name);
           for(const child of current.children){
               queue.push(child);
           }
        }
        return array;
    }
}
let node = new Node(10);
node.addchild(20);
console.log(node);
exports.Node = Node;