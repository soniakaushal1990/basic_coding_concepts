class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }

}
class LinkedList {
    constructor() {
        //   this.head=null;
    }
    insertFirst(data) {

        this.head = new Node(data, this.head);
        return this.head;
    }
    size() {
        let node = this.head;
        let count = 0;
        while (node) {
            count++;
            node = node.next;
        }
        return count;


    }
    getFirst() {
        return this.head;

    }
    getLast() {
        if (!this.head)
            return null;
        let node = this.head;
        while (node) {
            if (!node.next) {
                return node;
            }
            node = node.next;
        }

    }
    clear() {
        this.head = null;

    }
    removeFirst() {
        if (!this.head)
            return;
        this.head = this.head.next;

    }
    removeLast() {
        if (!this.head)
            return null;
        if (!this.head.next) {
            return;
        }
        let prev = this.head;
        let node = this.head.next;
        while (node) {
            if (!node.next) {
                prev = node;
                node = node.next;
            }
            prev.next = null;
            return;
        }
    }
    inserLast(data) {
     let lastnode = this.getLast();
     if(lastnode)
     lastnode.next= new Node(data);
     else
     this.head = new Node(data);
     return this.head;
     

    }
    getAt(index) {
        let counter=0;
        let node=this.head;
        while(node){
            if(counter === index){
              return node;
            }
          counter++;
          node=node.next;
        }
        return null;


    }
    removeAt(index) {

    }
    insertAt(data, index) {


    }





}


function midpoint(list) {
}
let linkedList = new LinkedList();
//linkedList.insertFirst(node);
//linkedList.insertFirst(10);
//linkedList.insertFirst(11);
linkedList.inserLast(12);
console.log(linkedList.getAt(2));
// console.log(linkedList.insertFirst(3));
// console.log(linkedList.insertFirst(2));
// console.log(linkedList.insertFirst(1));
// console.log(linkedList.size());
// console.log(linkedList.getLast());
//console.log(node);
module.exports = {
    Node,
    LinkedList,
    midpoint
};