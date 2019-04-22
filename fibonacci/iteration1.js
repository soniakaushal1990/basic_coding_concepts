//0 1 1 2


function fibonacci(n){

    let result = [0,1];
    for(i=2;i<n;i++){
        const a = result[i-1];
        const b = result[i-2];
        result.push(a+b);
    }
    console.log(...result);

}

