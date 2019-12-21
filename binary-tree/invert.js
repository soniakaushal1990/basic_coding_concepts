

//Time Complexity O(n)  Space Complexity O(n)

function binary_tree_invert(){
    const queue=[tree];
    while(queue.length){
        const current=queue.shift();
        if(current=== null) continue;
        swapLeftandRight(current);
        queue.push(current.left);
        queue.push(current.right);

    }

}
function swapLeftandRight(tree){
    const left = tree.left;
    tree.left=tree.right;
    tree.right=left;
}
module.exports=binary_tree_invert;