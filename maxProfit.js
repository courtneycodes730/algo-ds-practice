/* SOURCE: Interview Cake
Write an efficient function that takes stock_prices and returns the best profit 
I could have made from one purchase and one sale of one share of Apple stock 
yesterday.
*/

/* REPEAT
The function accepts an array of stock prices
Buying index must come before selling index and must not be equal
Return the best profit (typeof === number)
*/

/* EXAMPLES
getMaxProfit([10,7,5,8,11,9]) // 6
getMaxProfit([10,7,5,8,15,9]) // 10
getMaxProfit([11,9,10,7,5,8]) // -1
*/

/* APPROACH
point to start and end of array
set maxProfit === endIdx - startIdx
work toward center where start < end
check if next end - start > maxProfit, update if so
else check if arr[endIdx - 1] - arr[startIdx] or 
arr[endIdx] - arr[startIdx + 1] or
arr[endIdx - 1] - arr[startIdx + 1]
> maxProfit, if so increment or decrement appropriately
*/

/* CODE */
function getMaxProfit(stockPrices) {
	if (stockPrices.length < 2)
		throw new Error("Need at least two price points");

	let maxProfit = -Infinity;
	let minBuy = stockPrices[0];

	for (let i = 1; i < stockPrices.length; i++) {
		let currPrice = stockPrices[i];

		maxProfit = Math.max(maxProfit, currPrice - minBuy);
		minBuy = Math.min(minBuy, currPrice);
	}

	return maxProfit;
}

/* TEST */
console.log(getMaxProfit([10, 7, 5, 8, 11, 9])); // 6
console.log(getMaxProfit([10, 7, 5, 8, 15, 9])); // 10
console.log(getMaxProfit([10, 9, 8, 7, 5, 4])); // -1
