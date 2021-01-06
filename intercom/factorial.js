/**
 * 
 * 
 */

function factorialR(n){
    return (n < 2) ? 1 : n * factorialR(n-1);
}

var f = [];
function factorialM(n) {
  if (n == 0 || n == 1)
    return 1;
  if (f[n] > 0)
  {
    return f[n];
  } 
  f[n] = factorialM(n-1) * n;
  return f[n];
  
}






function factorialI(n){

    let f = 1;
    for(let i=1;i<=n;i++){
        f *=i;
    }
    
    return f;
    
}

console.log(factorialM(10));