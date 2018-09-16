//Function to find maximum character in a string

//maxchar('abbcccd') === c
// function maxchar(string){
//     let chars = {};
//     for(let char of string){
//         if(!chars[char]){
//             chars[char] = 1;
//         }
//         else{
//             chars[char]++;
//         }
//     }
//     console.log(chars);
// }


//Remove If statements from loop 1 using or statement

function maxchar(string){
    let chars={};
    let max = 0;
    let maxchar = '';
    for(let char of string){
        chars[char] = chars[char]+1 || 1;
    }
    for(let char in chars){
        if(chars[char]>max ){
            max=chars[char];
            maxchar =  char;
        }
    }
    console.log(max);
}
maxchar('Hello There!');