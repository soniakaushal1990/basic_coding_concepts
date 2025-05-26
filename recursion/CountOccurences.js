function CountCharOccurunce(string,char){
    var rec = function(index){      
        if(index == string.length) return 0;
        let count = (string[index] === char) ? 1 : 0;
        return count + rec(index+1);
    }
 
    return rec(0);
}


console.log(CountCharOccurunce("ffc",'c'));