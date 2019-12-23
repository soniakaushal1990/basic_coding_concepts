
//Time Complexity O(log(n))  Space Complexity O(log(n))
//Space will be used by call stack

let array =[10,23,26,28,45,55,66,77];
//let target=55;

function binary_search(array,target,left,right){
    while(left<=right){
        const middle = Math.floor((left+right)/2);
    const potentialmatch = array[middle];
    if(target === potentialmatch) return middle;
    else if(target < potentialmatch) 
       right = middle-1;
    else
       left=middle+1;

    }
    return -1;
    

}


console.log(binary_search(array,55,0,array.length-1));