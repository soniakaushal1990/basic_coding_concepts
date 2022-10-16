/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
 var serialize = function(root) {
    let string = [];

   function buildString(node) {
       if (!node) {
           string.push('N');
       } else {
           string.push(node.val);
           buildString(node.left);
           buildString(node.right);
       }
   }

   buildString(root);

   return string.join(",");

   
};

/**
* Decodes your encoded data to tree.
*
* @param {string} data
* @return {TreeNode}
*/
var deserialize = function(data) {
   let nodes = data.split(',');

   function buildTree() {
       let val = nodes.shift();

       if (val === 'N') {
           return null;
       } else {
           let node = new TreeNode(Number(val));
           node.left = buildTree();
           node.right = buildTree();
           return node;
       }
   }

   return buildTree();
};

