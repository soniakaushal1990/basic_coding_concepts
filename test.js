const binaryTree = require("./binary-tree/construct");
const root = new binaryTree(10);
root.insert([5, 5, 2, 1,-1]);
console.log(root);

function min_sum_path(node){
    helper(node); 
}

function helper(node){
    let min_list= [];
    let min ;
    if(node !== null){
     //   console.log(node.left);
        let left_list = helper(node.left);
        let right_list = helper(node.right);
        console.log(left_list);
        min = Math.min(left_list,right_list);
        min_list.push(min);
        return min_list;
    }

    return [];

}
//console.log(min_sum_path(root));