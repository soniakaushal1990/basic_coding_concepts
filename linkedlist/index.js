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
            if(!node.next){
                return node;
            }
            node =node.next;
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
        if(!this.head){
            return;
        }
        if(!this.head.next){
            return;
        }
        let previous = this.head;
        let node = this.head.next;
        while(node.next){
            previous = node;
            node = node.next;
        }
        previous.next = null;
        return list;

    }
    inserLast(data){
        const lastnode = this.getLast();
       // console.log(lastnode);
        if(lastnode){
            lastnode.next = new Node(data);
        }
        else{
            this.head = new Node(data);
        }
        console.log(list);
    }
    getAt(index){
        let counter =0;
        let node = this.head;
        while(node){
            if(index === counter){
                return node;
                
            }
            counter++
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
            console.log(list);
            return ;
        }
        const prev = this.getAt(index-1);
        if(!prev|| !prev.next){
            return;
        }
        prev.next = prev.next.next;
    }
    insertAt(data,index){

        if(!this.head){
            this.head = new Node(data);
        //    console.log(this.head);
            return;
        }

        if(index==0){
          this.head = new Node(data,this.head);
        //  console.log(this.head);
           return;
            
        }

        let previous = this.getAt(index-1);
        const node = new Node(data,previous.next);
        previous.next = node;
      //  console.log(previous);

    }

    
   
    

}


function midpoint(list) {
    let slow = this.getFirst();
    let fast = this.getFirst();
    while (fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    console.log(slow);
    return slow;
}
module.exports = {Node,LinkedList,midpoint};