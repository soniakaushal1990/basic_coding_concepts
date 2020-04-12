function flattenBinaryTree(root) {
    const inOrderNodes=getNodesInOrder(root,[]);
       for(let i=0;i<inOrderNodes.length-1;i++){
           const leftNode=inOrderNodes[i];
           const rightNode= inOrderNodes[i + 1];
           leftNode.right=rightNode;
           rightNode.left=leftNode;
       }
       return inOrderNodes[0];
   }
   function getNodesInOrder(tree,array){
       if(tree !== null){
           getNodesInOrder(tree.left,array);
           array.push(tree);
           getNodesInOrder(tree.right,array);
       }
       return array;
   }

   class BinaryTree{
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
      }

      insert(values,i=0){
          if(i>=values.length) return;
          const queue=[this];
          while(queue.length > 0){
              let current=queue.shift();
              if(current.left == null){
                  current.left= new BinaryTree(values[i]);
                  break;
              } 
              queue.push(current.left);
             
              if(current.right === null){
                  current.right= new BinaryTree(values[i]);
                  break;
              }
              queue.push(current.right);
          }
          this.insert(values,i+1);
          return this;

      }
    }

   //console.log(flattenBinaryTree(root));