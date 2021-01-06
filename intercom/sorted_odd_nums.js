let array = [1,2,4,5,6,13,9,7,6,899,76,65,55,43,41];


function sortedOddNums(array){
    let oddNumbers = array.filter(isOdd);
    return oddNumbers;
    
}

function isOdd(number){
    return (number%2 !=0) ? true: false 
}

console.log(sortedOddNums(array));

