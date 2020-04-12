
//Time Complexity Avg Case O(log N) || Space Complexity  O(1)
//Time Complexity Worst Case O(N)  |\Space Complexity  O(1)

function findClosestValueInBst(tree,target){
    return findClosestValueInBSTHelper(tree,target,Infinity);
}
function findClosestValueInBSTHelper(tree,target,closest){
    let currentNode=tree;
    while (currentNode !== null){
        if(Math.abs(target-closest)> Math.abs(target-currentNode.value)){
            closest=currentNode.value;
        }
        if(target<currentNode.value){
            currentNode=currentNode.left;
        }
        else if(target>currentNode.value){
            currentNode=currentNode.right;
        }
        else{
            break;
        }
    }
    return closest;
}
exports.findClosestValueInBST=findClosestValueInBst;