const BinaryTree = require("../../binary-tree/construct");
const root = new BinaryTree("1");
root.insert(["2", "3"]);
root.right.insert(["4", "5"]);
console.log(root);

const root1 = new BinaryTree("1");
root1.insert(["2", "3"]);
root1.right.insert(["4", "5"]);
console.log(root1);

function preOrderTraversal(tree, array) {
  if (tree !== null) {
    array.push(tree.value);
    preOrderTraversal(tree.left, array);
    preOrderTraversal(tree.right, array);
  }
  return array;
}
console.log(preOrderTraversal(root, []));

// function is_subTree(s, t) {
//   if (s == null) return false;
//   if (is_equal(s, t)) return true;
//   return is_subTree(s.left, t.left) && is_equal(s.right, t.right);
// }

// function is_equal(s, t) {
//   if (s == null && t == null) return true;
//   if (s == null || t == null) return false;
//   if (s.value !== t.value) return false;
//   return is_equal(s.left, t.left) && is_equal(s.right, t.right);
// }

// function isSubTree(s, t) {
//   let s_str = pre_order(s);
//   let t_str = pre_order(t);
//   console.log(s_str);
//   console.log(t_str);
//   return t_str.includes(s_str);
// }

// function pre_order(root) {
//   let travesal = [];
//   let stack = [root];
//   while (stack.length > 0) {
//     let n = stack.shift();
//     if (n == null) {
//       travesal.push(".");
//       continue;
//     } else {
//       travesal.push(n.value);
//       stack.push(n.right);
//       stack.push(n.left);
//     }
//   }

//   let str = travesal.join("");
//   return "," + "," + str + ",";
//   // return "," + "," + travesal + ",";
// }

//console.log(is_subTree(root, root1));
