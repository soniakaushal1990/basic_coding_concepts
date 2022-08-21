function largestNum(integer){

    let numString = integer.toString(); 
    let largest = -Infinity;

    for(let i = 0;i < numString;i++){
        if(numString.charAt(i) == '5') {
            let currLargest =  parseInt(numString.slice(0,i)+numString.slice(i+1,numString.length));
            if(currLargest > largest) largest = currLargest;
        }
            
    }

    return largest;
    

}


console.log(largestNum(5155));