/*
This problem was asked by Google.

Given the root of a binary tree, return a deepest node. For example, in the following tree, return d.


*/
const BinaryTree = require('../../binary-tree/construct');
let binaryTree = new BinaryTree();
 const root = new BinaryTree("a");
  root.insert(["b","c","e"]);
  //console.log(root);



function deepestNode(node){
    if(!node) return [null,0];
    var leftArray = deepestNode(node.left); 
    let rightArray =  deepestNode(node.right);
    if (leftArray[1] == 0 && rightArray[1] == 0)
       return [node,1];
    if (leftArray[1] >= rightArray[1])
        return [leftArray[0],leftArray[1]+1];
    return [rightArray[0], rightArray[1]+1];
}
console.log(deepestNode(root));