/* SOURCE: Interview Cake
Each round, players receive a score between 0 and 100, which you use to rank 
them from highest to lowest. So far you're using an algorithm that sorts in 
O(n * log⁡n) time, but players are complaining that their rankings aren't 
updated fast enough. You need a faster sorting algorithm.

Write a function that takes:

  1. a list of unsorted_scores
  2. the highest_possible_score in the game

and returns a sorted list of scores in less than O(n * log⁡n) time. 
*/

/* REPEAT
The function accepts an array of unsorted player scores and
the highest possible score in the game
Return sorted list of scores in < O(n * logn) time
*/

/* EXAMPLES
sortScores([37, 89, 41, 65, 91, 53], 100) // [91, 89, 65, 53, 41, 37]
*/

/* APPROACH
Utilize radix sort which operates in O(n * k) time where n is the length of the array of scores and k is the length of the number with the most digits
*/

/* CODE */
// function sortScores(scores, highestScore) {
// 	function getMaxDigits(arr) {}
// }

// SOLUTION FROM INTERVIEW CAKE
function sortScores(unorderedScores, highestPossibleScore) {
	// Array of 0s at indices 0..highestPossibleScore
	const scoreCounts = new Array(highestPossibleScore + 1).fill(0);

	// Populate scoreCounts
	unorderedScores.forEach((score) => {
		scoreCounts[score]++;
	});

	// Populate the final sorted array
	const sortedScores = [];

	// For each item in scoreCounts
	for (let score = highestPossibleScore; score >= 0; score--) {
		const count = scoreCounts[score];

		// For the number of times the item occurs
		for (let time = 0; time < count; time++) {
			sortedScores.push(score);
		}
	}

	return sortedScores;
}

console.log(sortScores([37, 89, 41, 65, 91, 53], 100));
// [91, 89, 65, 53, 41, 37]
