
// Good morning! Here's your coding interview problem for today.

// This problem was asked by Microsoft.

// Print the nodes in a binary tree level-wise. For example, the following should print 1, 2, 3, 4, 5.


const BinaryTree = require('../../binary-tree/construct');
const root = new BinaryTree("1");
root.insert(["2","3"]);
root.right.insert(["4","5"]);
console.log(root);
function treeTraversal(tree){
    let array=[];
    let queue = [tree];
    while(queue.length>0){
        const current = queue.shift();
        array.push(current.value);
        if(current.left){
            queue.push(current.left);
        }
        if(current.right){
            queue.push(current.right);
        }
    }
    return array;
}

console.log(treeTraversal(root));