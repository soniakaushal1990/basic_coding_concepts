function turbulence(A){
let inc = 1, dec = 1, res = 1;
        for (let i = 1; i < A.length; i++) {
            if (A[i] > A[i - 1]) {
                inc = dec + 1;
                dec = 1;
            } else if (A[i] < A[i - 1]) {
                dec = inc + 1;
                inc = 1;
            } else {
                inc = 1;
                dec = 1;
            }
          
            res = Math.max(res, Math.max(inc, dec));
            console.log(res);
        }

        return res;
    
}
console.log(turbulence([9,4,2,10,7,8,8,1,9]));