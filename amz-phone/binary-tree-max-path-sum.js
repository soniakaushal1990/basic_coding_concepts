function max_path_sum(root){
    
    var max_gain = function(node){
        if(!node) return 0;
        let left_gain = Math.max(max_gain(node.left),0);
        let right_gain = Math.max(max_gain(node.right),0);

        let price_path = node.val + left_gain + right_gain;

        max_sum = Math.max(price_path,max_sum);

        return node.val + Math.max(left_gain,right_gain) ;

    }
    let max_sum = -Infinity;
    max_gain(root);
    return max_sum;

}