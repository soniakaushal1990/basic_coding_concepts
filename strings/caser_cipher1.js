function encrypt(text, s)
{
    let result= '';
    for (let i = 0; i < text.length; i++)
    {
        let char = text[i];
       if(new RegExp(/[A-Z]/).test(char)){
            
            let c = (char.charCodeAt(0) + s-65) % 26 + 65;
            let ch = String.fromCharCode(c);
            result += ch;
       }else if(new RegExp(/[a-z]/).test(char)){
            let c = (char.charCodeAt(0) + s-97) % 26 + 97;
            let ch = String.fromCharCode(c);
            result += ch;
       }else if(new RegExp(/[0-9]/).test(char)){
           
            let c = (char.charCodeAt(0) + s-48) % 9 + 48;
            console.log(c);
            let ch = String.fromCharCode(c);
            result += ch;
       }
       else {
                result+=char;
        }     

    }

    return result;
}
 
// Driver code
let text = "ZABc&9ERSD";
let s = 2;
console.log(encrypt(text,s));