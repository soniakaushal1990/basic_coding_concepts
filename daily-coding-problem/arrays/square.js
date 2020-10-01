// Problem
// This problem was asked by Google.

// Given a sorted list of integers, square the elements and give the output in sorted order.

// For example, given [-9, -2, 0, 2, 3], return [0, 4, 4, 9, 81].

function square(array) {
  for (let i = 0; i < array.length; i++) {
    array[i] = array[i] * array[i];
  }
  array.sort((a, b) => a - b);
  process.exit();
  return array;
}

console.log(square([-9, -2, 0, 2, 3]));
