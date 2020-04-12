function balanced_brackets(str) {
    let array = [];
    let closing_braces = '})]';
    let opening_braces = '{([';
    let macthing_braces = {
        ')': '(',
        ']': '[',
        '}': '{'
    };
    for (const char of str) {
        if (opening_braces.includes(char)) {      
            array.push(char);
        } else if (closing_braces.includes(char)) {
            if (str.length == 0) {
                return false;
            }if(array[array.length-1] === macthing_braces[char]){
                array.pop();
            }else{
                return false;
            }
        }
    }
   
    return array.length===0;
}
console.log(balanced_brackets('{}()'));