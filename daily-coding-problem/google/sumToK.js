const BST= require('../../bst/bst1');
let bst = new BST(10);
bst.insert(15);
bst.insert(5);
bst.insert(11);
bst.insert(15);
// console.log(bst);

function sumToK(bst,k){
    let array =inOrderTraverse(bst,[]);
    let pointer1 = 0;
    let pointer2 = array.length-1;
    for(let i=0;i<array.length;i++){
        if(array[pointer1]+array[pointer2] > k) pointer2--;
        else if(array[pointer1]+array[pointer2] < k) pointer1--;
        else 
        return [array[pointer1],array[pointer2]];

    }
}


function inOrderTraverse(bst,array){
    let node = bst;
    if(node !== null){
        inOrderTraverse(node.left,array);
        array.push(node.value);
        inOrderTraverse(node.right,array);
    }
    return array;
}


console.log(sumToK(bst,15))