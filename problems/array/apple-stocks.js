// compare this problem to drone flight planner: https://www.pramp.com/challenge/BrLMj8M2dVUoY95A9x3X

function getMaxProfit(stockPrices) {
  if (stockPrices.length <= 1) throw new Error();
  // declare variable profit set to 0
  let profit = -stockPrices[0] + stockPrices[1];
  // iterate over stockPrices
  stockPrices.forEach( (price,i) => {
      for (let j = i + 1; j < stockPrices.length; j++) {
        if (-price + stockPrices[j] > profit) profit = -price + stockPrices[j];
      }
  });
    // for each price
      // keep track of variable buyPrice the negative value of the current price 
      // iterate over the remaining prices
        // for each price  
          // add current price to buyPrice
            //  if combination is greater than profit reassign profit
  // return profit          
  return profit;
}


