//Given a string, find the first non-repeating character in it. 
//For example, if the input string is “GeeksforGeeks”, then the output should be ‘f’ and 
//if the input string is “GeeksQuiz”, then the output should be ‘G’.

function non_repeating_chars(string){
    let string_hash={};
    for(let i=0;i<string.length;i++){
        if(string[i] in string_hash)
        string_hash[string[i]]+=1;
        else {
            string_hash[string[i]]=1;
        }
    }
    for(let i=0;i<string.length;i++){
        if(string[i] in string_hash && string_hash[string[i]] ==1)
        return string[i];
      //  console.log(string_hash[string[i]]);
    }
  // console.log(string_hash);
}

console.log(non_repeating_chars("GeeksforGeeks"));