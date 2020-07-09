
class BST{
    constructor(value){
       this.value=value;
       this.left=null;
       this.right=null;     

    }
    insert(value){
        if(value<this.value){
            if(this.left === null){
                this.left= new BST(value);
            }else{
                this.left.insert(value);
            }

        }else{
            if(this.right === null){
                this.right= new BST(value);
            }else{
                this.right.insert(value);
            }

        }

    }
 
   
}

function height(node){
    if(!node) return 0;
    var leftHeight = height(node.left);
    var rightHeight = height(node.right);
 
    return Math.max(leftHeight, rightHeight) + 1;
 }

let bst = new BST(A[0]);
for(let i=1;i<N;i++){
        bst.insert(A[i]);   
}  