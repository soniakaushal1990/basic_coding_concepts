// This problem was asked by Facebook.

// Given a array of numbers representing the stock prices of a company in chronological order, write a function that calculates the maximum profit you could have made from buying and selling that stock once. You must buy before you can sell it.

// For example, given [9, 11, 8, 5, 7, 10], you should return 5, since you could buy the stock at 5 dollars and sell it at 10 dollars.

// Solution
// The brute force solution here is to iterate over our list of stock prices, and for each price, find the largest profit you can make from selling that stock price (with the formula future - current), and keep track of the largest profit we can find. That would look like this:


function buy_sell_stock(array1){
    let max_profit = 0;
    for(let i=0;i<array1.length-1;i++){
        for(let j = i;j<array1.length;j++){
            let value = array1[j]-array1[i];
            max_profit = Math.max(max_profit,value)
        }
    }
    return max_profit;
}


// This problem was asked by Facebook.

// Given a array of numbers representing the stock prices of a company in chronological order, write a function that calculates the maximum profit you could have made from buying and selling that stock once. You must buy before you can sell it.

// For example, given [9, 11, 8, 5, 7, 10], you should return 5, since you could buy the stock at 5 dollars and sell it at 10 dollars.

// Solution
// The brute force solution here is to iterate over our list of stock prices, and for each price, find the largest profit you can make from selling that stock price (with the formula future - current), and keep track of the largest profit we can find. That would look like this:

//Time Complexity O(n) Space Compexity O(1)
function buyAndSell1(array1){
    let currentmax=0;
    let maxprofit =0;
    for(let i = array1.length-1;i>=0;i--){
        let price = array1[i];
        currentmax = Math.max(currentmax,price);
        potential_profit = currentmax-price;
     //   console.log(potential_profit);
        maxprofit=Math.max(maxprofit,potential_profit);
    };
    return maxprofit;
}

console.log(buyAndSell1([5, 9, 11, 8, 7, 10]));

// This runs in O(N) time and O(1) space.