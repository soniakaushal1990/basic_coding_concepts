//Time Complexity O(log(n))  Space Complexity O(log(n))
//Space will be used by call stack

let array = [10, 23, 26, 28, 45, 55, 66, 77];
//let target=55;

function binary_search(array, target) {
    return binary_search_helper(array, target, 0, array.length - 1);

}


function binary_search_helper(array, target, left, right) {
    if (left > right) return -1;
    const middle = Math.floor((left + right) / 2);
    const potentialmatch = array[middle];
    if (target === potentialmatch) return middle;
    else if (target < potentialmatch)
        return binary_search_helper(array, target, left, middle - 1);
    else
        return binary_search_helper(array, target, middle + 1, right);
}
console.log(binary_search(array, 55));