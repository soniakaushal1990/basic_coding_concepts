// This problem was asked by Pinterest.

// Given an integer list where each number represents the number of hops you can make, determine whether you can reach to the last index starting at index 0.

// For example, [2, 0, 1, 0] returns True while [1, 1, 0, 1] returns False.



function check(array){
    let numofElemsVisited=0;
    let currentIdx=0;
    while(numofElemsVisited < array.length){
        currentIdx = getNextIdx(currentIdx,array);
        console.log(currentIdx);
        numofElemsVisited++;
    }
    return currentIdx === array.length-1;

}

function getNextIdx(currentIdx,array){
    const jump =  array[currentIdx];
    const nextIdx = (currentIdx+jump)%array.length;
    return nextIdx>0 ? nextIdx: nextIdx+array.length;
}

console.log(check([1,2,0,1]));