/*
Like Merge Sort, QuickSort is a Divide and Conquer algorithm.It picks an element as pivot and partitions the given array around the picked pivot. There are many different versions of quickSort that pick pivot in different ways.
Always pick first element as pivot.
Always pick last element as pivot (implemented below)
Pick a random element as pivot.
Pick median as pivot.
*/

let array=[8,5,2,9,5,6,3];
function quick_sort(array) {
    quick_sort_helper(array, 0, array.length - 1);
    return array;
}

function quick_sort_helper(array, startIdx, endIdx) {
    if (startIdx > endIdx) return;
    const pivotIdx = startIdx;
    let leftIdx = startIdx + 1;
    let rightIdx = endIdx;
    while (rightIdx >= leftIdx) {
        if (array[leftIdx] > array[pivotIdx] && array[rightIdx] < array[pivotIdx])
            swap(leftIdx, rightIdx, array);
        if (array[leftIdx] <= array[pivotIdx]) leftIdx++;
        if (array[rightIdx] >= array[pivotIdx]) rightIdx--;
    }
    swap(pivotIdx, rightIdx, array);
    const leftSubarrayIsSmaller =
        rightIdx - 1 - startIdx < endIdx - (rightIdx + 1);
    if (leftSubarrayIsSmaller) {
        quick_sort_helper(array, startIdx, rightIdx - 1);
        quick_sort_helper(array, rightIdx + 1, endIdx);
    } else {
        quick_sort_helper(array, rightIdx + 1, endIdx);
        quick_sort_helper(array, startIdx, rightIdx - 1);
    }

}

function swap(i, j, array) {
    const temp = array[j];
    array[j] = array[i];
    array[i] = temp;
}