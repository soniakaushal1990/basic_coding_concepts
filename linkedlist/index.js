class Node{
    constructor(data,next=null){
        this.data=data;
        this.next=next;
    }
}
class LinkedList{
    constructor(){
        this.head=null;
    }
    insertFirst(data) {
      
       this.head = new Node(data,this.head);      
    }
    size(){
      let counter = 0;
      let node = this.head;
      console.log(node);
      while(node){
          counter++;
          node = node.next;
      }
      return counter;
    }
    getFirst(){
        let node = this.head;
     //   console.log(node.data);
        return node;
    }
    getLast(){
        if(!this.head){
            return null;
        }
        let node = this.head;
        while(node){
            node =node.next;
            if(!node.next){
                return node;
            }
        }
    }
    clear(){
        this.head = null;
        console.log(list);
    }
    removeFirst(){
        if(!this.head){
            return;
        }
        this.head = this.head.next;
        console.log(list);
    }
    removeLast(){

    }

}

const node = new Node(20);
const list = new LinkedList();
list.head = node;
list.insertFirst(15,list.head);
//list.insertFirst(17,list.head);
//list.insertFirst(18,list.head);
//console.log(list);
//console.log(list.size());
//list.getFirst();
//console.log(list.getLast());
//list.clear();
list.removeFirst();
module.export = {Node,LinkedList};