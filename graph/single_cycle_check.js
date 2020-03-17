function singleCycle(A){
  numELementVisited=0;
  let currentIdx=0;
  while(numELementVisited<A.length){
      if(numELementVisited>0 && currentIdx===0) return false;
      numELementVisited++;
      currentIdx= getNextIdx(currentIdx,array);
  }
  return currentIdx=0;
}
function getNextIdx(currentIdx,array){
    const jump=array[currentIdx];
    const nextIdx=(currentIdx+jump)%array.length;
    return nextIdx >=0?nextIdx:nextIdx+array.length;
}
let A=[2,3,1,-4];
singleCycle(A);

