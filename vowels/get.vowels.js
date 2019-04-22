//Get number of vowels in a string

//vowels('Hi there')--3


function getvowels(str){

    //var str_array =  str.split("");
   // console.log(str_array);
    let count = 0;
    for(let char of str){
      let  lowercasestr = char.toLowerCase();
     // console.log(lowercasestr);
    if(lowercasestr === 'a'|| lowercasestr === 'e'||lowercasestr === 'i'||lowercasestr === 'o'||lowercasestr === 'u' ){
            count++;
        }
    }        
    console.log('Vowels Count is '+count);
}


getvowels('Hi There SoniA');