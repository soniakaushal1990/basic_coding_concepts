function decodeVariations(s) {
 
    var recursive = function(s,index){     
        let memo = new Map();
        if (memo.has(index)) {
            return memo.get(index);
        }
        
        if(index == s.length) return 1;  
        if(s[index] == '0') return 0;
        
        if(index == s.length-1)
            return 1;
        
        answer = recursive(s,index+1);
      //  console.log(answer);
       
        if (parseInt(s.substring(index, index + 2)) <= 26) {
             answer += recursive(s,index + 2);
         }  
    
        memo.set(index,answer);

        console.log(memo);
        return answer;
    
    }
    
   return recursive(s,0);
}

console.log(decodeVariations("1246"));
