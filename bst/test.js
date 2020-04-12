const BST= require('./bst1');

let bst = new BST(6);
bst.insert(3);
bst.insert(17);
bst.insert(0);
bst.insert(4);
bst.insert(11);
bst.insert(19);
//console.log(bst);

let bst2= new BST(8);
bst2.insert(5);
bst2.insert(13);
bst2.insert(1);
bst2.insert(7);
//console.log(bst2);

function inOrderBst(tree,array){
    if(tree!== null){
        inOrderBst(tree.left,array);
        array.push(tree.value);
        inOrderBst(tree.right,array);
    }
    return array;
}
let array1 =inOrderBst(bst,[]);
let array2 =inOrderBst(bst2,[]);
let firstP=0;
let secondP=array2.length-1;
let target=30;
let PotSum=0;
while(firstP < array1.length) {
     PotSum= array1[firstP]+array2[secondP];  
     if(PotSum < target) firstP++;
     if(PotSum > target) secondP--;
     if(PotSum == target) {
         return [firstP,secondP];
     }

}   

