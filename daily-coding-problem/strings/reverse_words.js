// function reverse_words(string) {
//   let words = string.split(" ");
//   words.reverse();
//   return words.join(" ");
// }

function reverse_words(string) {
  let reversed_string = reverse_string(string);
  return reversed_string;
}

function reverse_string(string) {
  let start = 0;
  let end = string.length - 1;
  while (start < end) {
    let temp = string[start];
    string[start] = string[end];
    string[end] = temp;
    start++;
    end--;
  }
  return string;
}

console.log(reverse_words("hello world here"));
