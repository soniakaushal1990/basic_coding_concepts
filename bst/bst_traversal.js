const BST= require('./bst1');
let bst = new BST(10);
bst.insert(15);
bst.insert(22);
bst.insert(5);
bst.insert(2);
bst.insert(1);
bst.insert(5);
console.log(bst);
console.log(inorderTraverse(bst,[]));

function inorderTraverse(tree,array){
 if(tree!=null){
     console.log(array);
    inorderTraverse(tree.left,array);
    array.push(tree.value);
    inorderTraverse(tree.right,array);
 }
 return array;
}

function preOrderTraverse(tree,array){
    if(tree!=null){
        array.push(tree.value);
        preOrderTraverse(tree.left,array);
        preOrderTraverse(tree.right,array);
    }
    return array;
}

function postOrderTraverse(tree,array){
    if(tree!=null){
        postOrderTraverse(tree.left,array);
        postOrderTraverse(tree.right,array);
        array.push(tree.value);
    }
    return array;
}