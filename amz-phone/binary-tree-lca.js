function lca(root){
    if(!root || root == p || root == q) return root;
    let resL = lowestCommonAncestor(root.left,p,q);
    let resR = lowestCommonAncestor(root.right,p,q);
 
    
    return (resL && resR) ? root : (resL || resR);
}