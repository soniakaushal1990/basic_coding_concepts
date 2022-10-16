/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    const stack = [];
  
   
   let matching_braces = {
       ')': '(',
       ']': '[',
       '}': '{'
   };
   
   for(let i=0;i<s.length;i++){      
       let char = s[i];
       if(char in matching_braces){
           if(stack.length === 0) return false;
           if(stack[stack.length-1] === matching_braces[char]){
               stack.pop();
           }else{
               return false;
           }
       }else {            
           stack.push(char);
       }
       
       
   }
   
   return stack.length === 0;
   
};