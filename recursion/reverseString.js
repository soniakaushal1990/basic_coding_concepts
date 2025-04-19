function reverseString(string){
    var rec = function(index){
       if(index === string.length) return '';
       return rec(index+1) + string[index];
    }
    return rec(0);
}


console.log(reverseString("string"));