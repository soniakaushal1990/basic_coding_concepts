function test(A){

    let N = A.length, result = 0, hash = {};
    for(let i=0;i<N;i++){
        for(let j=0;j<N;j++){
            if(A[i] == A[j]) result = Math.max(result,Math.abs(i-j));
        }
    }
        return result;
}



function test2(A){

    let N = A.length, result = 0, hash = {};
    for(let i=0;i<N;i++){
      
        if(A[i] in hash){
           
            result = Math.max(result,Math.abs(hash[A[i]]-i));
        }
             

       else hash[A[i]] = i;
        
    }

    
        return result;
}



console.log(test2([2,6,2,6,1,6]));