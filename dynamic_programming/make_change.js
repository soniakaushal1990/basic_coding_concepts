
//Time complexity:O(n)

function numberOfWaysToMakeChange(n,denoms){
    const ways= new Array(n+1).fill(0);
    ways[0]=1;
    for(let denom of denoms){
        for(let amount=1;amount<n+1;amount++){
            if(denom<=amount){
                ways[amount]+=ways[amount-denom];
                if(denom==5){
                    console.log(ways);
                    console.log(amount);
                    console.log(ways[amount]);
                }
            }
        }
    }
    return ways[n];
}
console.log(numberOfWaysToMakeChange(10,[1,5,10,25]));