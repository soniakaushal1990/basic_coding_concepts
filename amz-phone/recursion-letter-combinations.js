/**
 * @param {string} digits
 * @return {string[]}
 */
 var letterCombinations = function(digits) {
    
    if(!digits.length) return [];
    
    let letters = {
        "2" : "abc",
        "3" : "def",
        "4" : "ghi",
        "5" : "jkl" ,
        "6" : "mno",
        "7" : "pqrs",
        "8" : "tuv",
        "9" : "wxyz"
    };
    
    var backtrack = function(index=0,path=[]){
        if(path.length == digits.length) {
            combinations.push(path.join(''));
            return;
        }
        
        let possible_letters = letters[digits[index]];
        for(let letter of possible_letters){         
            path.push(letter);
            backtrack(index+1,path);
            path.pop();
            
        }
    }
    
    
    let combinations = [];
    backtrack();
    return  combinations;   
    
};