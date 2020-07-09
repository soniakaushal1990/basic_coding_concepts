function powerofTwo(n){
    while(n>1){
        n = n/10;
    }
    return n === 1;
 }
 console.log(powerofTwo(0));