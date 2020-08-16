// let BinaryTree = require("./construct");
// let binaryTree = new BinaryTree("A");
// binaryTree.insert(["B", "C", "D", "E", "F", "G", "H", "I"]);
function lca(topAncestor, descendant1, descendant2) {
  let depth1 = getDescendantDepth(descendant1, topAncestor);
  let depth2 = getDescendantDepth(descendant2, topAncestor);
  console.log(depth1);
  console.log(depth2);
  if (depth1 > depth2) {
    return BackTrackTree(descendant1, descendant2, depth1 - depth2);
  } else {
    return BackTrackTree(descendant2, descendant1, depth2 - depth1);
  }
}

function BackTrackTree(lowerDescendant, upperDescendant, diff) {
  while (diff > 0) {
    lowerDescendant = lowerDescendant.ancestor;
    diff--;
  }
  while (lowerDescendant !== upperDescendant) {
    lowerDescendant = lowerDescendant.ancestor;
    upperDescendant = upperDescendant.ancestor;
  }
  return upperDescendant;
}

function getDescendantDepth(descendant, topAncestor) {
  let depth = 0;
  while (descendant != topAncestor) {
    descendant = descendant.ancestor;
    depth += 1;
  }
  return depth;
}
class AncestralTree {
  constructor(name) {
    this.name = name;
    this.ancestor = null;
  }
  addAsAncestor(descendants) {
    for (const descendant of descendants) {
      descendant.ancestor = this;
    }
  }
}
const ancestralTrees = {};
const ALPHABET = "ABCDEFGHI".split("");
for (const letter of ALPHABET) {
  ancestralTrees[letter] = new AncestralTree(letter);
}
ancestralTrees.A.addAsAncestor([ancestralTrees.B, ancestralTrees.C]);
// console.log(ancestralTrees);
ancestralTrees.B.addAsAncestor([ancestralTrees.D, ancestralTrees.E]);
ancestralTrees.C.addAsAncestor([ancestralTrees.F, ancestralTrees.G]);
ancestralTrees.D.addAsAncestor([ancestralTrees.H, ancestralTrees.I]);
//   ancestralTrees.F.addAsAncestor([ancestralTrees.M, ancestralTrees.N]);
//   ancestralTrees.H.addAsAncestor([ancestralTrees.O, ancestralTrees.P, ancestralTrees.Q, ancestralTrees.R]);
//   ancestralTrees.K.addAsAncestor([ancestralTrees.S]);
//   ancestralTrees.P.addAsAncestor([ancestralTrees.T, ancestralTrees.U]);
//   ancestralTrees.R.addAsAncestor([ancestralTrees.V]);
//   ancestralTrees.V.addAsAncestor([ancestralTrees.W, ancestralTrees.X, ancestralTrees.Y]);
//   ancestralTrees.X.addAsAncestor([ancestralTrees.Z]);

//console.log(ancestralTrees);
console.log(lca(ancestralTrees.A, ancestralTrees.E, ancestralTrees.I));
