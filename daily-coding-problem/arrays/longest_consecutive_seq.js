// Time Complexity O(nlogn)  Space O(1)

function longest_consecutive_seq(array) {
  array.sort((a, b) => a - b);
  let count = 1;
  let max_count = 0;
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i + 1] === array[i] + 1) count++;
    else count = 1;
    max_count = Math.max(count, max_count);
  }
  return max_count;
}

function longest_consecutive_seq1(nums) {
  let max_length = 0;
  let set = {};
  for (elem in nums) {
    set[elem] = "";
  }
  for (let i = 0; i < array.length; i++) {
      if(array[i]-1 )
  }
}

console.log(longest_consecutive_seq1([100, 4, 200, 1, 3, 2, 5]));
