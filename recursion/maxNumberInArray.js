function MaxNumber(array){
    var max = function(index){
        if(index == array.length-1) return array[index];        
        return Math.max(array[index],max(index+1));
    }
    return max(0);
}

console.log(MaxNumber([1,41,59,6]))