
// Funtion to reverse a string

//Examples

//reverse_string('hello') === 'olleh'



//**attempt 1

// function reverse_string(string){
//     let length =  Math.round(string.length);
//     let reverstr = [];

//     for(let i=0;i<length;i++){
        
//         reverstr[i]=string[length-1];
//         reverstr[length-1]= string[i];
//         length--;
//     }
//     console.log(reverstr);
// }
// reverse_string('sonia');

//**attempt 2

// function reverse_string(str){
//     let reversed = '';
//     for(let char of str){
//         reversed = char + reversed;
//     }
//     return reversed;
// }
// reverse_string('hello');

//** attempt 3
//Javascipt function
// function reverse_string(str){
//  return str.split('').reduce((rev,char) => {char+rev});
// }
let reversed =reverse_string('hello');
console.log(reversed);

