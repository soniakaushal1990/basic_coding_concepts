
let BinaryTree = require('./construct');
let bt = new BinaryTree(1);
bt.insert([2, 3, 4, 5, 6, 7]);

function maxPathSum(tree) {
    const [_,maxSum]=findMaxSum(tree);
      return maxSum;
  }
  
  function findMaxSum(tree){
      if(tree === null) return [0,-Infinity];
      const [leftMaxSumAsBranch,leftMaxPathSum]=findMaxSum(tree.left);
    //  console.log(leftMaxSumAsBranch,leftMaxPathSum);
      const [rightMaxSumAsBranch,rightMaxPathSum]= findMaxSum(tree.right);
      //console.log(rightMaxSumAsBranch,rightMaxPathSum);
      const maxChildSumAsBranch = Math.max(leftMaxSumAsBranch,rightMaxSumAsBranch);
      console.log(maxChildSumAsBranch);
      const {value}=tree;
    const maxSumAsBranch = Math.max(maxChildSumAsBranch + value,value);
      const maxSumAsRootNode = Math.max(leftMaxSumAsBranch + value + rightMaxSumAsBranch,maxSumAsBranch);
    const maxPathSum = Math.max(leftMaxPathSum,rightMaxPathSum,maxSumAsRootNode);
    return [maxSumAsBranch,maxPathSum];		
  }
  

console.log(maxPathSum(bt));
  // Do not edit the line below.
  exports.maxPathSum = maxPathSum;
  