/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var reverseList = function(head) {
    
    let p1=null;
    p2=head;
    while(p2!=null){
        const p3=p2.next;
        p2.next=p1;
        p1=p2;
        p2=p3;
    }
    return p1;
    
};