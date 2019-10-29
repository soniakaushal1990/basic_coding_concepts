//these three methods can be used for most of the operations of linked list

class Node{
    constructor(data,next=null){
        this.data = data;
        this.next = next;

    }
}

class LinkedList{
    constructor(){
        this.head = null;

    }
    getAt(index){
        let counter = 0;
        let node = this.head;
        while(node){
            if(index === counter){
              return node;
            }
            counter++;
            node = node.next;

        }
        return null;
    }
    removeAt(index){
        if(!this.head){
            return null;
        }
        if(index == 0){
            this.head = this.head.next;
            return;
        }
        const previous = this.getAt(index-1);
        if(!previous || !previous.next){
            return;
        }
        previous.next = previous.next.next;

    }
    insertAt(data,index){
        //if the linked list is empty we need to add the node at index 0
        if(!this.head){
            this.head = new Node(data);
            return;
        }
        //if the index is zero then we point head to new node and new node next to point to previous data in the head 
        if(index==0){
            this.head = new Node(data,this.head);
            return;
        }
        //anyother index would come to this node
        //get the data at one index less that the index you want to add.
        let previous = this.getAt(index-1);
     
        const node = new Node(data,previous.next);
        previous.next = node;
    }

}
const node = new Node(17);
console.log("\n\n\n*******Adding a new node******");
console.log(node);

console.log("\n\n\n*******Implementation on Insertion of a Node******");

const linkedlist = new LinkedList();
linkedlist.insertAt(15,0);
linkedlist.insertAt(16,1);
linkedlist.insertAt(17,2);
console.log(linkedlist);


