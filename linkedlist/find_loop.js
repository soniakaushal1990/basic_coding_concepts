function loop(head){
    let first = head.next;
    let second = head.next.next;
    while(first !==second){
        first=first.next;
        second=second.next.next;
    }
    first=head;
    while(first!==second){
        first=first.next;
        second=second.next;
    }
    return first;
}