// time O(d) space O(1) d is depth of lower descendant 
function getYougestCommonAncestor(topAncestor,descendantOne,descendantTwo){
    const depthOne=getDescendantDepth(descendantOne,topAncestor);
    const depthTwo=getDescendantDepth(descendantTwo,topAncestor);
    if(depthOne>depthTwo){
        return backTrackAncestralTree(descendantOne,descendantTwo,depthOne-depthTwo);
    }else{
        return backTrackAncestralTree(descendantTwo,descendantOne,depthTwo-depthOne);
    }

}
function getDescendantDepth(descedant,topAncestor){
    let depth=0;
    while(descedant !== topAncestor){
        depth++;
        descedant=descedant.ancestor;
    } return depth;
}

function backTrackAncestralTree(lowerDescendant,higherDescendant,diff){
    while(diff>0){
        lowerDescendant=lowerDescendant.ancestor;
        diff--;
    }
        while(lowerDescendant !== higherDescendant){
        lowerDescendant=lowerDescendant.ancestor;
        higherDescendant=higherDescendant.ancestor;
    }
    return lowerDescendant;
}


///TEST
class AncestralTree{
    constructor(name){
        this.name=name;
        this.ancestor=null;
    }
    addAsAncestor(descendants) {
        for (const descendant of descendants) {
          descendant.ancestor = this;
        }
    }
}
const ancestralTrees = {};
const ALPHABET = 'ABCDEFGHI'.split('');
for (const letter of ALPHABET) {
  ancestralTrees[letter] = new AncestralTree(letter);
}
ancestralTrees.A.addAsAncestor([
    ancestralTrees.B,
    ancestralTrees.C
  ]);
 // console.log(ancestralTrees);
ancestralTrees.B.addAsAncestor([ancestralTrees.D, ancestralTrees.E]);
ancestralTrees.C.addAsAncestor([ancestralTrees.F,ancestralTrees.G]);
ancestralTrees.D.addAsAncestor([ancestralTrees.H, ancestralTrees.I]);
//   ancestralTrees.F.addAsAncestor([ancestralTrees.M, ancestralTrees.N]);
//   ancestralTrees.H.addAsAncestor([ancestralTrees.O, ancestralTrees.P, ancestralTrees.Q, ancestralTrees.R]);
//   ancestralTrees.K.addAsAncestor([ancestralTrees.S]);
//   ancestralTrees.P.addAsAncestor([ancestralTrees.T, ancestralTrees.U]);
//   ancestralTrees.R.addAsAncestor([ancestralTrees.V]);
//   ancestralTrees.V.addAsAncestor([ancestralTrees.W, ancestralTrees.X, ancestralTrees.Y]);
//   ancestralTrees.X.addAsAncestor([ancestralTrees.Z]);
 
console.log(getYougestCommonAncestor(ancestralTrees.A,ancestralTrees.E,ancestralTrees.F));