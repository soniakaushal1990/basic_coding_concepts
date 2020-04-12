
//Time Complexity 2 power n 
//at each step we call two more calls
//Space compexity O(n) for n recursive calls 
function fibonacci(n){
    if(n===2)
    return 1;
    else if(n === 1)
    return 0;
    else 
    return fibonacci(n-1)+fibonacci(n-2);

}
console.log(fibonacci(5));

