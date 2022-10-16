var generateParenthesis = function(n) {
    
    var backtrack = function(currResult=[],left=0,right=0){
        
        
        if(currResult.length === 2*n) finalResult.push(currResult.join(''));
        
        if(left < n) {
            
            currResult.push('(');
            backtrack(currResult,left+1,right);
            currResult.pop();
        }
        if(right < left){
            currResult.push(')');
            backtrack(currResult,left,right+1);
            currResult.pop();
        }
           
    }
    
    let finalResult = [];
    backtrack();
    return finalResult;
    
};