function invertBinarytree(tree){
    if(tree==null)return;
    swapBinaryTree(tree);
    invertBinarytree(tree.left);
    invertBinarytree(tree.right);
}

function swapBinaryTree(tree){
    const left = tree.left;
    tree.left=tree.right;
    tree.right=left;
}