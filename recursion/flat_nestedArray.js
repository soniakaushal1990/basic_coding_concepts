function flattenArray(array){
    for(let i = 0 ;i < array.length ; i++){    
        if(typeof array[i] == 'object') {
            flattenArray(array[i]);
        }
        else {
            merged.push(array[i]);
        }

    }
    return merged;
}
let merged = [];
let array = [1, [2, [3, 4], 5]];
console.log(flattenArray(array));