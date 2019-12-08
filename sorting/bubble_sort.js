/*

Best O(n)|o(1)
Average O(n^2)| time o(1)
Worst:Same as above

*/
function bubble_sort(array) {
    let is_sorted = false;
    let counter = 0;
    while (!is_sorted) {
        is_sorted = true;
        for (i = 0; i < array.length - 1; i++) {
            if (array[i] > array[i + 1]) {
                swap(i, i + 1, array);
                is_sorted = false;
            }
        }
        counter++

    }
    return array;

}

function swap(i, j, array) {
    const temp = array[j];
    array[j] = array[i];
    array[i] = temp;

}
let array = [8, 5, 2, 9, 5, 6, 3];
console.log(bubble_sort(array));