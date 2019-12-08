/*Series
0 1 1 2 5 8 13 21 34
Time o(2 power n)  | Space o(n)
2 power n because each value of n make 2 calls 

*/

function fib1(n){
        if(n==1||n==2)
        return 1;
        else
        return fib1(n-1)+fib1(n-2);
}


//Cache the fib(n) value in hash table as it gets calculated

//Time complexity o(n) | space complexity o(n)
function fib2(n,memoize={1:0,2:1}){
        if(n in memoize){
                return memoize[n];
        } else{
                memoize[n] =fib2(n-1,memoize)+fib2(n-2,memoize);
                return memoize[n];
        }
}



//Cache the fib(n) value in hash table as it gets calculated

//Time complexity o(n) | space complexity o(1)
//0 1 1 2 5 8 13 21 34
function fib3(n){
        const lastTwo=[0,1];
        let counter=3;
        while(counter <=n){
                const nextfib = lastTwo[0]+lastTwo[1];
                lastTwo[0]=lastTwo[1];
                lastTwo[1]= nextfib;
                counter++;
        }
        return n>1?lastTwo[1]:lastTwo[0];
}


console.log(fib3(4));