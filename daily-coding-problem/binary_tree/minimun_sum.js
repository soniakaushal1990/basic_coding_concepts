// This is your coding interview problem for today.

const BinaryTree = require("../../binary-tree/construct");

let root = new BinaryTree(1);
root.insert([2, 3]);
root.left.insert([4, 5]);
root.right.insert([6, 7]);
//console.log(root);

// This problem was asked by Facebook.

// Given a binary tree, return the level of the tree with minimum sum.

// We will be sending the solution tomorrow, along with tomorrow's question. As always, feel free to shoot us an email if there's anything we can help with.

function level_minimum_sum(tree) {
  let queue = [tree];
  let ansSum = tree.value;
  let level = 1;
  let ansLevel = 0;
  while (queue.length > 0) {
    let queue_size = queue.length;
    let sum = 0;
    while (queue_size > 0) {
      let node = queue.shift();
      if (node.right) {
        sum += node.right.value;
        queue.push(node.right);
      }
      if (node.left) {
        sum += node.left.value;
        queue.push(node.left);
      }
      queue_size--;
    }
    if (ansSum < sum) {
      ansSum = sum;
      ansLevel = level;
    }
    level += 1;
  }
  return level;
}
console.log(level_minimum_sum(root));
