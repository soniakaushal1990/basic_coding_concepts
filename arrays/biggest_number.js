function getLargest(array) {
    return array
        .map(String)
        .sort((a, b) => (b + a) - (a + b));
        // .join('');
}
let array= [1, 34, 3, 98, 9, 76, 45, 4];
array = [54, 546, 548, 60];
console.log(getLargest(array));