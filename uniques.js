/* SOURCE: AlgoDaily
Given an array, return just the unique elements without using any built-in 
Array filtering. In other words, you're removing any duplicates.
*/

/* REPEAT
Function takes an array of numbers
Cannot sort
Filter array (without using Array.filter()) to remove duplicates
Return NEW array of unique values
*/

/* EXAMPLES
uniques([3, 5, 6, 9, 9, 4, 3, 12]) // [3, 5, 6, 9, 4, 12]
uniques([13, 5, 3, 5, 8, 13, 14, 5, 9]) // [13, 5, 3, 8, 14, 9]
*/

/* APPROACH
Initialize object which will store values from arr as keys
Initialize results arr
Iterate over arr, checking if value is found in object
If true, continue. Else push into results arr
*/

/* CODE */
function uniques(arr) {
  let seen = {};
  let results = [];

  for (let num of arr) {
    if (!seen[num]) {
      seen[num] = true;
      results.push(num);
    } else continue;
  }

  return results;
}

/* TEST */
console.log(uniques([3, 5, 6, 9, 9, 4, 3, 12]), "should be [3, 5, 6, 9, 4, 12]")
console.log(uniques([13, 5, 3, 5, 8, 13, 14, 5, 9]), 
"should be [13, 5, 3, 8, 14, 9]")