function apartment_hunting(blocks,reqs)
{       
        const minDistancesFromBlocks = reqs.map(req=>getMinDistances(blocks,req));
        console.log(minDistancesFromBlocks);
        const maxDistanceatBlocks=getmaxDistanceatBlocks(blocks,minDistancesFromBlocks);
        console.log(maxDistanceatBlocks);
        return getIdxAtMinValue(maxDistanceatBlocks);


}
function getMinDistances(blocks,req){
    const minDistances =  new Array(blocks.length);
    let closestReqIdx = Infinity;
   
   
    for(let i=0;i<blocks.length;i++){
        if(blocks[i][req]) closestReqIdx=i;
        minDistances[i]= distanceBetween(i,closestReqIdx);
    }
    for(let i = blocks.length-1;i>=0;i--){
        if(blocks[i][req]) closestReqIdx=i;
        minDistances[i]=Math.min(minDistances[i],distanceBetween(i,closestReqIdx));
    }
    return minDistances;
}

function getmaxDistanceatBlocks(blocks,minDistancesFromBlocks){
    const maxDistanceatBlocks=new Array(blocks.length);
    for(let i=0;i<blocks.length;i++){
        const minDistancesAtBlock =minDistancesFromBlocks.map(
            distances => distances[i],
        );
        maxDistanceatBlocks[i] = Math.max(...minDistancesAtBlock);
    }
    return maxDistanceatBlocks;
    
}
function getIdxAtMinValue(array){
    let IdxAtMinValue =0;
    let minvalue=Infinity;
    for(let i=0;i<array.length;i++){
        const current_value=array[i];
        if(current_value<minvalue){
            minvalue=current_value;
            IdxAtMinValue=i;
        }
    }
    return IdxAtMinValue;   
}
function distanceBetween(a,b){
    return Math.abs(a-b);
}

let blocks =
[
    {
        "gym":false,
        "school":true,
        "store":false

    },
    {
        "gym":true,
        "school":false,
        "store":false

    },
    {
        "gym":true,
        "school":true,
        "store":false

    },
    {
        "gym":false,
        "school":true,
        "store":false

    },
    {
        "gym":false,
        "school":true,
        "store":true
    }
  
];
let perks = ["gym","school","store"];
console.log(apartment_hunting(blocks,perks));
module.exports=apartment_hunting;