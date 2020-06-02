function diskStacking(disks) {
    disks.sort((a,b)=> a[2]-b[2]);
    const heights = disks.map(disk => disk[2]);
    const sequences = new Array(disks.length);
    let maxHeightIdx =0;
    for(let i=1;i<disks.length;i++){
        const currentDisk = disks[i];
        for(let j=0;j<i;j++){
            const otherdisk=disks[j];
            if (areValidDimensions(otherdisk,currentDisk)){
                if(heights[i] <= currentDisk[2]+heights[j]){
                    heights[i]=currentDisk[2]+heights[j];
                    sequences[i]=j;
                }
            }
        }
        if(heights[i] >= heights[maxHeightIdx]) maxHeightIdx  = i
    }
    return buildSequence(disks,sequences,maxHeightIdx);
}

function areValidDimensions(o,c){
    return o[0]<c[1] && o[0] <c[1] && o[2]<c[2];

}

function buildSequence(array,sequences,currentIdx){
    const sequence =[];
    while(currentIdx !== undefined){
        console.log(currentIdx);
        sequence.unshift(array[currentIdx]);
        currentIdx = sequences[currentIdx];
    }
    return sequence;	
}
console.log(diskStacking([[2, 1, 2], [3, 2, 3], [2, 2, 8], [2, 3, 4], [1, 3, 1], [4, 4, 5]]));