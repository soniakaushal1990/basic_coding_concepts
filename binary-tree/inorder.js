let BinaryTree = require('./construct');
let bt = new BinaryTree(1);
bt.insert([2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
function iterativeInOrderTraversal(tree, callback) {
    let previousNode=null;
      let currentNode=tree;
      while(currentNode !==null){
          let nextNode;
          if(previousNode === null || previousNode === currentNode.parent){
              if(currentNode.left !== null){
                  nextNode=currentNode.left;
              }else{
                  callback(currentNode);
                nextNode= currentNode.right !== null ? currentNode.right : currentNode.parent;
              }
          } else if(previousNode === currentNode.left){
              callback(currentNode);
              nextNode= currentNode.right !== null ? currentNode.right : currentNode.parent;
          }else {
              nextNode = currentNode.parent;
          }
          previousNode=currentNode;
          currentNode=nextNode;
      }
  }