let cityFrom=[1,2,2];
let cityTo=[2,3,4];
let noCities=4;
let company =1;

class Node{
    constructor(name){
        this.name=name;
        this.children=[];
    }
    addChild(name){
        this.children.push(new Node(name));
    }
    getGraph(array,array2){
        let list=[];
        for(let i=0;i<array.length;i++){
            let node = new Node(array[i]);    
            node.addChild(array2[i]);  
            list.push(node);
        } 
        return list;
    }
    bfs(list,array){        
        let queue=list;
        while(queue.length>0){
            const current= queue.shift();
          //  array.push(current.name);
            for(const child of current.children){
                array.push(child.name);
            }
        }
        return array;

    }
}
let node= new Node(company);
let graph = node.getGraph(cityFrom,cityTo);
console.log(node.bfs(graph,[]));
