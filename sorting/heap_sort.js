function heap_sort(array){
    build_MaxHeap(array);
    console.log(array);
    for(let endIdx= array.length-1;endIdx>0;endIdx--){
        swap(0,endIdx,array);
        siftDown(0,endIdx-1,array);
    }
    return array;
}
function build_MaxHeap(array){
    let firstParentIdx = Math.floor((array.length-1)/2);
    for(let currentIdx = firstParentIdx; currentIdx >= 0;currentIdx--){
        siftDown(currentIdx,array.length-1,array);
    }
}

function siftDown(currentIdx,endIdx,heap){
    let childOneIdx = currentIdx  * 2 + 1;
    while(childOneIdx <=endIdx){
        const childTwoIdx = currentIdx * 2 + 2 <= endIdx ? currentIdx * 2+2:-1;
        let idToSwap;
        if(childTwoIdx !== -1 && heap[childTwoIdx] > heap[childOneIdx]){
            idToSwap=childTwoIdx;
        }else {
            idToSwap=childOneIdx;
        }
        if(heap[idToSwap] > heap[currentIdx]){
            swap(currentIdx,idToSwap,heap);
            currentIdx=idToSwap;
            childOneIdx = currentIdx * 2 + 1;
        } else {
            return;
        }

    }

}

function swap(i,j,array){
    const temp=array[j];
    array[j]=array[i];
    array[i]=temp;
}
let array = [8, 5, 2, 9, 5, 6, 3];
heap_sort(array);