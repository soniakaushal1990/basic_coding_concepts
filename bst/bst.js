class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
    insert(data){
        if(data < this.data && this.left){
            this.left.insert(data);
        }else if(data < this.data){
            this.left = new Node(data);
        }else if(data > this.data && this.right){
            this.right.insert(data);
        }
        else if(data > this.data){
            this.right = new Node(data);
        }
    }
    contains(data){
      
         if(this.data == data){
            console.log(data);
             return this;
         }
         if(data < this.data && this.left){
           
            return this.left.contains(data);
         }
         else if(data > this.data && this.right){
            console.log(data);
            return this.right.contains(data)
         }
        return null;
        
    }
   
}


var node = new Node(20);
 node.insert(10);
// node.insert(5);
// node.insert(4);

//console.log(node);
console.log(node.contains(10));
