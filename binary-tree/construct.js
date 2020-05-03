class BinaryTree  {
    constructor(value) {
      this.value=value;
      this.right=null;
      this.left=null;
    }
  
    insert(values, i = 0) {
      if (i >= values.length) return;
      const queue = [this];
      while (queue.length > 0) {
        let current = queue.shift();
        if (current.left === null) {
          current.left = new BinaryTree(values[i]);
          break;
        }
        queue.push(current.left);
        if (current.right === null) {
          current.right = new BinaryTree(values[i]);
          break;
        }
        queue.push(current.right);
      }
      this.insert(values, i + 1);
      return this;
    }
  
    leftToRightToLeft() {
      const nodes = [];
      let current = this;
      while (current.right !== null) {
        nodes.push(current.value);
        current = current.right;
      }
      nodes.push(current.value);
      while (current !== null) {
        nodes.push(current.value);
        current = current.left;
      }
      return nodes;
    }
  }
  module.exports = BinaryTree;
  // const root = new BinaryTree(1);
  // root.insert([2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
  // console.log(root.left);