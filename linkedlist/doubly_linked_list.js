class Node{
    constructor(data){
        this.head=null;
        this.tail=null;
        this.data=data;
    }
}




class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    setHead(node) {
        if (this.head == null) {
            this.head = null;
            this.tail = null;
            return;
        }

    }
    setTail(node) {

    }
    insertBefore(node, nodeToInsert) {
        if (nodeToInsert === this.head && nodeToInsert === this.tail) return;
        this.remove(nodeToInsert);
        nodeToInsert.prev=node.prev;
        nodeToInsert.next=node;
        if(node.prev ===null){
            this.head=nodeToInsert;
        }
        else{
            node.prev.next=nodeToInsert;
        }
        node.prev=nodeToInsert;

    }
    insertAfter(node, nodeToInsert) {

    }
    insertAtPostion(postion, nodeToInsert) {

    }
    removeNodesWithValue(value) {
        let node = this.head;
        while(node !==null){
            //this is required when the value is occuring multiple times
            nodeToRemove= node;
            node =node.next;
            if(nodeToRemove.value== value){
                this.remove(nodeToRemove);
            }
        }

    }
    remove(node) {
        if (node === this.head) this.head = this.head.next;
        if (node === this.tail) this.tail = this.tail.prev;
        this.removeNodeBindings(node);
    }
    containsNodeWithValue(value) {
        let node = this.head;
        while (node !== null && node.value !== value) {
            node = node.next;
            return node !== null;
        }

    }
    removeNodeBindings(node) {
        if (node.prev !== Null) {
            node.prev.next = node.next;
        }
        if (node.next !== Null) {
            node.next.prev = node.prev;
        }
        node.prev = null;
        node.next = null;
    }

}
let doublyLinkedList = new DoublyLinkedList();
doublyLinkedList.containsNodeWithValue(2);
module.exports = DoublyLinkedList;