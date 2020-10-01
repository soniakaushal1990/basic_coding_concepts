class BinarySearchTree{
  constructor(value){
    this.value = value;
    this.left=null;
    this.right=null;
  }

  insert(value){
    if(value < this.value){
      if(this.left == null)
      this.left = new BinarySearchTree(value);
      else
      this.left.insert(value);
    } else {
      if(this.right == null)
      this.right = new BinarySearchTree(value);
      else
      this.right.insert(value);
    }
  }

}

let bst = new BinarySearchTree(10);
bst.insert(5);
bst.insert(15);
bst.insert(2);
bst.insert(5);
bst.insert(13);
bst.insert(22);
bst.insert(1);
bst.insert(12);
bst.insert(14);







function inOrderTraversal(tree,array){
      if(tree !== null){
        inOrderTraversal(tree.left,array);
        array.push(tree.value);
        inOrderTraversal(tree.right,array);
      }
      return array;
}

console.log(inOrderTraversal(bst,[]));


// function validateBST(tree){
//   return validateBSTHelper(tree,-Infinity,Infinity);
// }



// function validateBSTHelper(tree,minValue,maxValue){
//   if(tree == null) return true;
//   while(tree !== null){
//     if(tree.value < minValue || tree.value > maxValue) return false;
//      const LeftIsValid = validateBSTHelper(tree.left,minValue,tree.value);
//      return LeftIsValid && validateBSTHelper(tree.right,tree.value,maxValue);
//   }

// }
// console.log(validateBSTHelper(bst));

















// function closestValueinBST(tree,target){
//   return closestValueinBSTHelper(tree,target,tree.value);

// }

// function closestValueinBSTHelper(tree,target,closest) {
//     let currentNode = tree;
//     while(tree !== null){
//       if(Math.abs(target-closest) > Math.abs(target - currentNode.value))
//       {
//         closest = currentNode.value;
//       }
//       if(target < currentNode.value){
//         currentNode = currentNode.left;
//       }
//       else if(target > currentNode.value){
//         currentNode = currentNode.right;
//       } else {
//         break;
//       }
//     }
//     return closest;
// }


// console.log(closestValueinBST(bst,12));