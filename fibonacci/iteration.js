//0 1 1 2

function fibonacci(n){
    let a =[];
    let sum ;
    for(i=0;i<n;i++){
            for(j=i-1;j<i;j++){
                if (i==0 ){
                    sum = 0
                }
                else if(i==1){
                    sum =1;
                }
                
                else{
                    
                    sum = a[i-1]+a[j-1];
                }
            a.push(sum);
            process.stdout.write(`${sum} `);
        
        }
    }
}
fibonacci(6);

