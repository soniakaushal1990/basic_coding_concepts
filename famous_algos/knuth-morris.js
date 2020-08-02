function knuthMorrisPrattAlgorithm(string, substring) {
    let M = substring.length;
    let N =string.length;
    for(let i=0;i<=N-M;i++){
        j=0;
		for(;j<M;j++)
                if(string[i+j] != substring[j]) 
                    break;
        if(j == M) return i;		
	    
    }
    return -1;
}
console.log(knuthMorrisPrattAlgorithm("aefoaefcdaefcdaed","aefcdaed"));