//Time O(n2)  | O(n) space where n is the length of the array
function rightSmallerThan(array) {
	let output = [];
  for(let i=0;i<array.length;i++){
		let counter=0;
		for(let j=i+1;j<array.length;j++){
			  if(array[j] < array[i])
					counter++;
		} 
		output.push(counter);
	}
	return output;
}
let array =[8, 5, 11, -1, 3, 4, 2]
console.log(rightSmallerThan(array));