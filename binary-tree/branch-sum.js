class binaryTree{
    constructor(value){
        this.value=value;
        this.left=null;
        this.right=null;
    }
}
//             1
//     2               3
// 4       5       6       7

function branch_sums(root){
    const sums=[];
    calculate_branch_sums(root,0,sums);
    return sums;

}
function calculate_branch_sums(node,running_sum,sums){
        if(!node)
        return;
        const new_running_sum=running_sum+node.value;
        if(!node.left && !node.right){
            sums.push(new_running_sum);
            return;
        }
    calculate_branch_sums(node.left,new_running_sum,sums);
    calculate_branch_sums(node.right,new_running_sum,sums);
}