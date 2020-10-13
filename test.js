// class BinarySearchTree{
//   constructor(value){
//     this.value = value;
//     this.left=null;
//     this.right=null;
//   }

//   insert(value){
//     if(value < this.value){
//       if(this.left == null)
//       this.left = new BinarySearchTree(value);
//       else
//       this.left.insert(value);
//     } else {
//       if(this.right == null)
//       this.right = new BinarySearchTree(value);
//       else
//       this.right.insert(value);
//     }
//   }

// }

// // let bst = new BinarySearchTree(10);
// // bst.insert(5);
// // bst.insert(15);
// // bst.insert(2);
// // bst.insert(5);
// // bst.insert(13);
// // bst.insert(22);
// // bst.insert(1);
// // bst.insert(12);
// // bst.insert(14);







// // function inOrderTraversal(tree,array){
// //       if(tree !== null){
// //         inOrderTraversal(tree.left,array);
// //         array.push(tree.value);
// //         inOrderTraversal(tree.right,array);
// //       }
// //       return array;
// // }

// // console.log(inOrderTraversal(bst,[]));


// // function validateBST(tree){
// //   return validateBSTHelper(tree,-Infinity,Infinity);
// // }



// // function validateBSTHelper(tree,minValue,maxValue){
// //   if(tree == null) return true;
// //   while(tree !== null){
// //     if(tree.value < minValue || tree.value > maxValue) return false;
// //      const LeftIsValid = validateBSTHelper(tree.left,minValue,tree.value);
// //      return LeftIsValid && validateBSTHelper(tree.right,tree.value,maxValue);
// //   }

// // }
// // console.log(validateBSTHelper(bst));



// // function minHeightBSt(array){

// //     return constructMinHeightBST(array,null,0,array.length-1);
// // }


// // function constructMinHeightBST(array,bst,startIdx,endIdx){
// //   console.log(startIdx);
// //   console.log(endIdx);
// //   if(endIdx < startIdx) return;
// //   const midIdx = Math.floor((startIdx+endIdx)/2);
// //   const valueToAdd = array[midIdx];
// //   if(bst === null){
// //     bst = new BinarySearchTree(valueToAdd);
// //   }else{
// //     bst.insert(valueToAdd);
// //   }
// //   constructMinHeightBST(array,bst,startIdx,midIdx-1);
// //   constructMinHeightBST(array,bst,midIdx+1,endIdx);
// //   return bst;
// // }

// // console.log(minHeightBSt([1,2,5,7,10,13,14,15,22]));




// // function samBST(array1,array2){
// //   if(array1.length !== array2.length) return false;
// //   if(array1.length === 0 && array2.length === 0) return true;
// //   if(array1[0] !== array2[0]) return false;
// //   const leftOne = getSmaller(array1);
// //   console.log(leftOne);
// //   const leftTwo = getSmaller(array2);
// //   const rightOne = getBiggerOrEqual(array1);
// //   const rightTwo = getBiggerOrEqual(array2);
// //   return samBST(leftOne,leftTwo) && samBST(rightOne,rightTwo);


// // }


// // function getSmaller(array){
// //   const smaller = [];
// //   for(let i=1;i<array.length;i++){
// //     if(array[i]<array[0]) smaller.push(array[i]);
// //   }
// //   return smaller;
// // }

// // function getBiggerOrEqual(array){
// //   const biggerOrEqual = [];
// //   for(let i=1;i<array.length;i++){
// //     if(array[i] >= array[0]) biggerOrEqual.push(array[i]);
// //   }
// //   return biggerOrEqual;
// // }
// // console.log(samBST([10,15,8,12,94,81,5,2,11],[10,8,5,15,2,12,11,94,81]));











// // function closestValueinBST(tree,target){
// //   return closestValueinBSTHelper(tree,target,tree.value);

// // }

// // function closestValueinBSTHelper(tree,target,closest) {
// //     let currentNode = tree;
// //     while(tree !== null){
// //       if(Math.abs(target-closest) > Math.abs(target - currentNode.value))
// //       {
// //         closest = currentNode.value;
// //       }
// //       if(target < currentNode.value){
// //         currentNode = currentNode.left;
// //       }
// //       else if(target > currentNode.value){
// //         currentNode = currentNode.right;
// //       } else {
// //         break;
// //       }
// //     }
// //     return closest;
// // }


// // console.log(closestValueinBST(bst,12));



// class Node {
//   constructor(value) {
//   this.value=value;
//   this.next=null;
//   this.prev=null;
//   }
// }


// class DoublyLinkedList {
//   constructor(){
//     this.head =null;
//     this.tail=null;
//   }

//   containsNodewithValue(value){
//     let node = this.head;
//     while(node !== null && node.value !== value){
//       node = node.next;
//     }
//     return node !== null;
//   }

//   remove(node){
//     if(node === this.head) this.head = this.head.next;
//     if(node === this.tail) this.tail = this.tail.prev;
//     this.removeNodeBindings(node);

//   }

//   removeNodeBindings(node){
//     if(node.prev !== null){
//       node.prev.next = node.next;
//       node.next.prev=node.prev;
//     }
//     node.prev=null;
//     node.next=null;

//   }

//   insertBefore(node,nodeToInsert){
//     if(nodeToInsert == this.head || nodeToInsert == this.tail) return;
//     this.remove(nodeToInsert);
//     nodeToInsert.prev = node.prev;
//     nodeToInsert.next=node;
//     if(node.prev == null){
//       this.head = nodeToInsert;
//     }else {
//       node.prev.next =  nodeToInsert;     
//     }
//     node.prev = nodeToInsert;
//   }

//   insertAfter(node,nodeToInsert){
//     if(nodeToInsert === this.head || nodeToInsert === this.tail) return;
//     this.remove(nodeToInsert);
//     nodeToInsert.prev = node;
//     nodeToInsert.next = node.next;
//     if(node.next === null){
//       this.tail = nodeToInsert;
//     }else {
//       node.next.prev = nodeToInsert;
//     }
//     node.next = nodeToInsert

//   }

// }


// function removeKthNodeFromEnd(head,k){
//   let fisrt = head;
//   let second = head;
//   let counter=1;
//   while(counter <=k){
//     second = second.next;
//     counter++;
//   }
//   if(second === null){
//     head.value = head.next.value;
//     head.next=head.next.next;
//   }
//   while(second.next !== null){
//     second=second.next;
//     fisrt=fisrt.next;
//   }
//   first.next= first.next.next;
// }


// class SingleLinkedList{
//   constructor(value){
//     this.value = value;
//     this.next = null;
//   }
//   addMany(values){
//     let current = this;
//     while(current.next !== null){
//       current = current.next;
//     }

//     for(const value of values){
//       current.next = new SingleLinkedList(value);
//       current = current.next;
//     }
//     return this;
//   }
// }


// function findloop(head){
//   let first = head.next;
//   let second = head.next.next;
//   while (second !== first){
//     first=first.next;
//     second=second.next.next;
//   }
//   first = head;
//   while(first !== second){
//     first=first.next;
//     second=second.next;
//   }
//   return first;
// }
// const test = new SingleLinkedList(0).addMany([1, 2, 3, 4, 5, 6, 7, 8, 9]);
// console.log(test);


const user = require('./try');
console.log(user);




