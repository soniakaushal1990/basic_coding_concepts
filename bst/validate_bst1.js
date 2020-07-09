
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
function validate_BST(tree){
    return validate_BSTHelper(tree,-Infinity,Infinity);
}
function validate_BSTHelper(tree,minValue,maxValue){
    console.log("Min value"+minValue);
    console.log(tree);
    console.log("Max Value" +maxValue);
    if(tree===null) return true;
    if(tree.value< minValue || tree.value>= maxValue) return false;
    const leftIsValid = validate_BSTHelper(tree.left,minValue,tree.value);
    return leftIsValid && validate_BSTHelper(tree.right,tree.value,maxValue);
}
validate_BST(bst);