let array = [1,2,4,5,6,13,9,7,6,899,76,65,55,43,41];


function sortedOddNums(array){
    let oddNumbers = [];
    for(let i =0;i<array.length;i++){
        if(array[i] %2 != 0){
            oddNumbers.push(array[i]);
        }
    }
    return oddNumbers.sort((a,b)=>a-b);
}

console.log(sortedOddNums(array));