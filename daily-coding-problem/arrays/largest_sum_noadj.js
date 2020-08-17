// This problem was asked by Airbnb.

// Given a list of integers, write a function that returns the largest sum of non-adjacent numbers. Numbers can be 0 or negative.

// For example, [2, 4, 6, 2, 5] should return 13, since we pick 2, 6, and 5. [5, 1, 1, 5] should return 10, since we pick 5 and 5.

// Follow-up: Can you do this in O(N) time and constant space?

//Time O(n) | Space O(n)

function largestSumNoAdj(array) {
  if (!array.length) return 0;
  if (array.length == 1) return array[0];
  const maxSums = array.slice();
  maxSums[1] = Math.max(array[0], array[1]);
  for (let i = 2; i < array.length; i++) {
    maxSums[i] = Math.max(maxSums[i - 1], maxSums[i - 2] + array[i]);
    console.log(maxSums);
  }
  return maxSums[maxSums.length - 1];
}

//Time Complexity O(n) | Space O(1)
function largestSumNoAdj1(array) {
  if (!array.length) return 0;
  if (array.length === 1) return array[0];
  let max_including_last = array[1];
  let max_excluding_last = array[0];
  for (let i = 2; i < array.length; i++) {
    const current = Math.max(max_including_last, max_excluding_last + array[i]);
    max_excluding_last = max_including_last;
    max_including_last = current;
  }
  return max_including_last;
}

console.log(largestSumNoAdj1([2, 4, 6, 2, 5]));
