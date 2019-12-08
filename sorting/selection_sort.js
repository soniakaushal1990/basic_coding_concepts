let array = [8, 5, 2, 9, 5, 6, 3];

function selection_sort(array) {
    let startIdx = 0;
    while (startIdx < array.length - 1) {
        let smallestIdx = startIdx;
        for (i = startIdx + 1; i < array.length; i++) {
            if (array[startIdx] < array[i]) {
                smallestIdx = array[i];
            }
        }
        swap(startIdx, smallestIdx, array);
        startIdx++
    }
    return array;
}

function swap(i, j, array) {
    let temp = array[j];
    array[j] = array[i];
    array[i] = temp;
}
console.log(selection_sort(array));