function alice_difference(S){

    S.sort((a,b)=>a-b);
    
    for(let i=0;i<S.length-2;i++){
        for(let j=i+1;j<S.length-1;j++){
            for(k=j+1;k<S.length;k++){
                let mean = (S[i]+S[j]+S[k])/3;
                let median = S[j];
                if(mean === median) return [S[i],S[j],S[k]];
            }
        }
    }

}

console.log(alice_difference([1,4,6,8,10]));