function longestIncreasingSubsequence(array) {
    const sequences = new Array(array.length);
    const lengths = array.map(num => 1);
    let maxLengthIdx = 0;
    for (let i = 0; i < array.length; i++) {
        const currentNum = array[i];
        for (let j = 0; j < i; j++) {
            const otherNum = array[j];
            if (otherNum < currentNum && lengths[j] + 1 >= lengths[i]) {
                lengths[i] = lengths[j] + 1;
                sequences[i] = j;
            }
        }
        if (lengths[i] >= lengths[maxLengthIdx]) maxLengthIdx = i;
    }
    return buildSequence(array, sequences, maxLengthIdx);
}

function buildSequence(array, sequences, currentIdx) {
    const sequence = [];
    while (currentIdx !== undefined) {
        sequence.unshift(array[currentIdx]);
        currentIdx = sequences[currentIdx];
    }
    return sequence;
}
console.log(longestIncreasingSubsequence([5, 7, -24, 12, 10, 2, 3, 12, 5, 6, 35]));
