function smallestSubstring(string = "this is a test string", pattern = "tist" ){
    let smaller = Infinity;

    // console.log(smaller);
  

    for(let i=0;i<string.length;i++){
        let substring = string[i];
        for(let j = i+1;j<string.length;j++){
            substring = substring+string[j];
            if(substring.includes(pattern)){
                console.log(substring);
                smaller = Math.min(smaller,substring.length);
                
               
            } 
        }
    }

    return smaller;
    
}

console.log(smallestSubstring());