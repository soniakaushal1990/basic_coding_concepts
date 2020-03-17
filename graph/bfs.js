class Node{
    constructor(name){
        this.name=name;
        this.children=[];
    }
    addChild(name){
        this.children.push(new Node(name));
    }
    breathFirstSearch(array){
        let queue = [this];
        while(queue.length>0){
            const current  = queue.shift();
            array.push(current.name);
            for(const child of current.children){
                queue.push(child);
            }
        }
        return array;
    }
}
const test2 = new Node('A');
test2.addChild('B');
 test2.addChild('C');
test2.addChild('D');
test2.addChild('E');
test2.children[1].addChild('F');
console.log(test2.breathFirstSearch([]));