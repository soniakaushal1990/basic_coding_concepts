// Question: Given a pattern containing only Ns and Ms. N represent ascending and M represent descending, Each
// character (M or N) needs to display a sequence of numbers (2 numbers) explaining the ascending and
// descending order (for ex: 21 ->represents the ascending ->M). The second character in the patterns
// takes the last digit from the first character the builds that sequence and so on. Please look at the example
// section below.

// There could be multiple numbers satisfying the patterns. The goal is to find out the lowest numeric
// the value following pattern.

// Here are some constraints to this problem:

// Input can have a maximum of 8 characters.
// Output can have Digit from 1-9 and Digits can’t repeat.
// In case of no possible output or incorrect input value (like blank/ null/ NON M or N character), kindly return -1.


function findPossibleSmallestNumberMatchingPattern(pattern) {
    let curr_max = 0;
    let last_entry = 0;
    let i = 0;
    let out=[];
    while (i < pattern.length) {
        let noOfNextDs = 0;
        if (pattern[i] == "I") {
            j = i + 1;
            while (j < pattern.length && pattern[j] == "D") {
                noOfNextDs += 1;
                j++;
            }
            if (i == 0) {
                curr_max = noOfNextDs + 2;
                last_entry += 1;
                out.push(last_entry);
                out.push(curr_max);
                last_entry = curr_max;
            } else {
                curr_max += noOfNextDs + 1;
                last_entry = curr_max;
                out.push(last_entry);
            }
            for (let k = 0; k < noOfNextDs.length; k++) {
                last_entry -= 1;
                out.push(last_entry);
                i += 1;
            }
        } else if (pattern[i] == "D") {
            if (i == 0) {
                j = j + 1;
                while (j < pattern.length && pattern[j] == "D") {
                    noOfNextDs += 1;
                    j += 1;
                }
                curr_max = noOfNextDs + 2;
                out.push(curr_max, curr_max - 1);
                last_entry = curr_max - 1;
            } else {
                out.push(last_entry - 1);
                last_entry -= 1;
            }
        }
        i += 1;
    }
    return out.join('');


}
console.log(findPossibleSmallestNumberMatchingPattern("IDD"));