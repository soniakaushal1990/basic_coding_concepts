function shifted_binary_search(array, target) {
    return shifted_binary_search_helper(array, target, 0, array.length - 1);
}
//Time O(n) Space O(n)

function shifted_binary_search_helper(array, target, left, right) {
    if (left > right) return -1;
    const middle = Math.floor((left + right) / 2);
    const potentialMatch = array[middle];
    const leftNum = array[left];
    const rightNum = array[right];
    if (target == potentialMatch) {
        return middle;
    } else if (leftNum <= potentialMatch) {
        if (target < potentialMatch && target >= leftNum) {
            return shifted_binary_search_helper(array, target, left, middle - 1);
        } else {
            return shifted_binary_search_helper(array, target, middle + 1, right);
        }
    } else {
        if (target > potentialMatch && target <= rightNum) {
            return shifted_binary_search_helper(array, target, middle + 1, right);
        } else {
            return shifted_binary_search_helper(array, target, left, middle - 1);
        }
    }

}
console.log(shifted_binary_search([45, 61, 71, 72, 73, 0, 1, 21, 33, 45], 33));