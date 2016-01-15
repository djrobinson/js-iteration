/*
Hints for the first problem:
  1. Define a function that:
    - is assigned to a variable named `sum`
    - has one parameter named `options`
    - returns the calculated sum of all of the values of all of the options passed in
NOTE: use a loop to make this happen.
*/

function sumPrices(prices) {
  console.log(prices);
  var runningSum = 0; 
  for ( var i = 0; i < prices.length; i ++ ) {
    runningSum += prices[i];
  }
  console.log(runningSum);
  return runningSum;

}

function countSelPrices(selPrices) {
  console.log(selPrices);
  console.log(selPrices.length);
  return selPrices.length;
}