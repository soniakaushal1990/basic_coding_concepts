const BinaryTree = require('../../binary-tree/construct');
const root = new BinaryTree("1");
root.insert(["2","3"]);
// root.left.insert(["4","5"]);
console.log(root);


function serialize(root){
    if(root === null)
    return '#';
    return `${root.value}, ${serialize(root.left)},${serialize(root.right)}`;
}

function deserialize(data){

    

}




console.log(serialize(root,[]));