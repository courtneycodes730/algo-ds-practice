/* SOURCE: AlgoDaily
Determine how "out of order" a list is by writing a function that returns the 
number of inversions in that list.
*/

/* REPEAT
Function takes an array
Returns a number, which represents the number of inversions
An inversion is counted if a value precedes another that is larger than it
Must be done in better than O(n^2) time
*/

/* EXAMPLES
inversions([5, 4, 3, 2, 1]) // 10 (since every element is out of order)
inversions([2, 1, 4, 3, 5]) // 2 (which are (2,1) and (4,3))
*/

/* APPROACH
Initialize count = 0, j
Iterate over the array from i = 0;
Set j = i + 1
For value at i, check if value at j is less than it
If so, count++, else continue
Return count
*/

/* CODE */
function inversions(arr) {}

/* TEST */