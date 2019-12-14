const LinkedList = require('./index').LinkedList;
const list =new LinkedList();
list.insertFirst(12);
list.insertFirst(13);
console.log(list);
//list.insertFirst(14);
// list.insertFirst(15);
// list.insertFirst(16);
// list.insertFirst(17);
// list.insertFirst(18);
function removeKthNodeFromEnd(head,k){
    let counter=1;
    let first=head;
    let second=head;
    while(counter<=k){
        second=second.next;
        counter++
    }
 //   console.log(second);
    if(second==null){
      
        head.data=head.next.data;
        head.next=head.next.next;
        return head;
    }
    while(second.next !==null){
        second=second.next;
        first=first.next;
    }
    first.next=first.next.next;
    return first;
}
console.log(removeKthNodeFromEnd(list.head,2));