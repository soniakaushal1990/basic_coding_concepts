// Time o(n) || Space O(n) 

/*Algo
First put all the elements in hash map
Then iterate through array if num exist has falsy value in hash map continue
else run a while loop until left-1 and right+1 exist in hash map
and increment the current length by 1 left dec by 1 and rigth inc by 1 


Last check if current length >longest length assign current length to longest length and push left+1 and right -1 in best range
*/
function largest_range(array) {
    let longest_length = 0;
    let best_range = [];
    const nums = {};
    for (const num of array) {
        nums[num] = true;
    }
    for (const num of array) {
        if (!nums[num]) continue;
        nums[num] = false;
        let left = num - 1;
        let right = num + 1;
        let current_length = 1;
        while (left in nums) {
            nums[left] = false;
            left--;
            current_length++;
        }
        while (right in nums) {
            nums[right] = false;
            right++;
            current_length++;
        }
        if (current_length > longest_length) {
            longest_length = current_length;
            best_range = [left + 1, right - 1];
        }
    }
    return best_range;

}
let array = [1, 11, 3, 0, 15, , 8, 5, 2, 4, 10, 7, 12, 6];
console.log(largest_range(array));
module.exports = largest_range;