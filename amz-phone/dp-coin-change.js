/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
 var coinChange = function(coins, amount) {
    let numOfCoins= new Array(amount+1).fill(Infinity);
    numOfCoins[0]=0;
    for(const denom of coins){
        for(let amount=0;amount<numOfCoins.length;amount++){
            if(denom<=amount){
                numOfCoins[amount]=Math.min(numOfCoins[amount]
                            ,numOfCoins[amount-denom]+1);
            }
        }
    }
    return numOfCoins[amount] !== Infinity? numOfCoins[amount]:-1;
};