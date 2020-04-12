function balancedBrackets(string) {
    const stack = [];
    let closing_braces = '})]';
    let opening_braces = '{([';
    let matching_braces = {
        ')': '(',
        ']': '[',
        '}': '{'
    };
    for (const char of string) {
        if (opening_braces.includes(char)) {      
            stack.push(char);
        } else if (closing_braces.includes(char)) {
            if (stack.length == 0) {
                return false;
            }if(stack[stack.length-1] === matching_braces[char]){
                stack.pop();
            }else{
                return false;
            }
        }
    }
   
    return stack.length===0;
}
console.log(balanced_brackets('{}()'));