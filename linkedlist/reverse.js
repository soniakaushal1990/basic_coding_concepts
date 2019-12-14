const LinkedList = require('./index').LinkedList;
//const midpoint =  require('../linkedlist/index').midpoint;


 //const node = new Node(18);
 const list = new LinkedList();
 //list.head = node;
 list.insertFirst(16,list.head);
 list.insertFirst(15,list.head);
 list.insertFirst(14,list.head);



function reverseLinkedList(head){
    let p1=null;
    p2=head;
    while(p2!=null){
        const p3=p2.next;
        p2.next=p1;
        p1=p2;
        p2=p3;
    }
    return p1;
}
console.log(reverseLinkedList(list.head));
//console.log(list);