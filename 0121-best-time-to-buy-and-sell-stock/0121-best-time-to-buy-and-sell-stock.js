/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let bestProfit = 0;
    let buy = 0
    let sell = 1
    while(sell < prices.length){
        if(prices[buy] > prices[sell]){
            buy = sell
        }
        if(prices[sell] - prices[buy]  > bestProfit){
            bestProfit = prices[sell] - prices[buy]
        }
        console.log(bestProfit)
        sell++
    }
    return bestProfit
};

