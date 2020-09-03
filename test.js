const binaryTree = require("./binary-tree/construct");
const root = new binaryTree(1);
root.insert([2, 3, 4, 5]);
console.log(root);
function invertTree(tree){
    const queue = [tree];
    while(queue.length){
        const current = queue.shift();
        if(current === null) continue;
        swapLeftAndRight(current);
        queue.push(current.left);
        queue.push(current.right);
    }
    return tree;
} 

function swapLeftAndRight(tree){
    const left = tree.left;
    tree.left =tree.right;
    tree.right = left;

}
console.log(invertTree(root));