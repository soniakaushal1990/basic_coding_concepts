
const BST= require('./bst1');
let bst = new BST(10);
bst.insert(20);
bst.insert(5);
bst.insert(2);
bst.insert(21);
 bst.insert(5);
// bst.insert(2);
// bst.insert(1);
// bst.insert(15);
console.log(bst);
function validate_BST(tree){
    return validate_BSTHelper(tree,-Infinity,Infinity);
}
function validate_BSTHelper(tree,minValue,maxValue){
    if(tree===null) return true;
    if(tree.value< minValue || tree.value>= maxValue) return false;
    console.log(tree.value);
    console.log(minValue);
    console.log(maxValue);

    const leftIsValid = validate_BSTHelper(tree.left,minValue,tree.value);
    return leftIsValid && validate_BSTHelper(tree.right,tree.value,maxValue);
}
validate_BST(bst);