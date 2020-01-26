function validate_BST(tree){
    return validate_BSTHelper(tree,-Infinity,Infinity);
}
function validate_BSTHelper(tree,minValue,maxValue){
    if(tree===null) return true;
    if(tree.value< minValue || tree.value>= maxValue) return false;
    const leftIsValid = validate_BSTHelper(tree.left,minValue,tree.value);
    return leftIsValid && validate_BSTHelper(tree.right,tree.value,maxValue);
}