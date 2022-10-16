function symmetric_tree(root){

    helper(root,root);

    var helper = function(t1,t2){

        if(t1 == null && t2 == null) return true;

        if(t1 == null || t2 == null) return false;

        if(t1.val != t2.val) return false;

        const isleftSymmetric =  helper(t1.left,t2.right);
        const isrightSymmetric = helper(t1.right,t2.left);

        return (t1.val == t2.val) && isleftSymmetric && isrightSymmetric;


    }
     
}