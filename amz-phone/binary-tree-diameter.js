function binaryTreeDiameter(root){

    var longestPath = function(node){
        if(!node) return 0;
        let leftPath = longestPath(node.left);
        let rightPath = longestPath(node.right);
        diameter = Math.max(diameter,leftPath+rightPath);
        return Math.max(leftPath,rightPath)+1;
    }

    let diameter = 0;
    longestPath(root);
    return diameter;
}