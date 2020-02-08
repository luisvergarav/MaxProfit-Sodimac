function getMaxProfit(prices) {
  if (prices.length < 2) {
      throw new Error('Se necesita al menos 2 precios');
  }
  
   if (!prices || typeof prices.map !== "function") {
    return new Error("Debe ingresar un array de precios");
  }
  var minimumPrice = prices[0]
 
  var maximumProfit = prices[1] - prices[0]
  
  var minIndex = 0
  
  for (var index = 1, length = prices.length; index < length; ++index) {  
    if (prices[index] - minimumPrice > maximumProfit) {
      maximumProfit = prices[index] - minimumPrice
    }
   
  if (prices[index] < minimumPrice && index !== prices.length - 1) {
      minimumPrice = prices[index]
      minIndex = index
    }
  }
  
  
  if (maximumProfit > 0) 
      return maximumProfit;
  else
       return -1;
}

var stockPrices = [44, 30, 22, 32, 35, 30, 41, 38, 15] ;
var maxProfit = getMaxProfit(stockPrices);
if (maxProfit > 0) 
console.log('Max Profit for ' + stockPrices + " : " + maxProfit );
else
console.log('Max Profit for ' + stockPrices + " : doesnt exist " + maxProfit);
    
