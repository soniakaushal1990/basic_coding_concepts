function kadane(array){
    let maxEndingatIndex=array[0];
    let maxSoFar=array[0];
    for(let i=1;i<array.length;i++){
        const num= array[i];
        maxEndingatIndex = Math.max(num,maxEndingatIndex+num);
        maxSoFar = Math.max(maxSoFar,maxEndingatIndex);
    }
    return maxSoFar;

}
let array=[3, 5, -9, 1, 3, -2, 3, 4, 7, 2, -9, 6, 3, 1, -5, 4];
console.log(kadane(array));