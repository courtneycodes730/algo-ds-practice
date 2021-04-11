/* SOURCE: AlgoDaily
Given an array of numbers, return true if there is a contiguous subarray that 
sums up to a certain number n.
*/

/* REPEAT
Function takes an array of numbers in no particular order and a target sum
Returns a boolean
Checks if there is a set of consecutive numbers in array that sum to target
*/

/* EXAMPLES
const arr = [1, 2, 3], sum = 5
subarraySum(arr, sum)
// true

const arr = [11, 21, 4], sum = 9
subarraySum(arr, sum)
// false 
*/

/* APPROACH
Store final result as result = false to begin
Nested loop i = 0, j = i + 1
As you increment j and add value to currSum, check currSum === sum
If true, break, else keep looping until end
Return result;
*/

/* CODE */
// function subarraySum(arr, sum) { O(n^2)
//   let result = false;

//   for (let i = 0; i < arr.length; i++) {
//     let currSum = arr[i];
//     if (currSum === sum) {
//       result = true;
//       return result;
//     }

//     for (let j = i + 1; j < arr.length; j++) {
//       currSum += arr[j];
//       if (currSum === sum) {
//         result = true;
//         return result;
//       }
//     }
//   }

//   return result;
// }

/* TEST */
// console.log("true --->", subarraySum([1, 2, 3], 5));
// console.log("false --->", subarraySum([11, 21, 4], 9));
// console.log("false --->", subarraySum([], 3));

/* OPTIMIZE */
function subarraySum(arr, target) {
  let sumsMap = { 0: 1 }; // hash of prefix sums
  let currSum = 0;
  
  for (let num of arr) {
    currSum += num; // increment current sum
    if (sumsMap[currSum - target]) {
      return true;
    }

    // store sum so far in hash with truthy value
    sumsMap[currSum] = true;
  }
  
  return false;
}

/* TEST again */
console.log("true --->", subarraySum([1, 2, 3], 5));
// console.log("false --->", subarraySum([11, 21, 4], 9));
// console.log("false --->", subarraySum([], 3));