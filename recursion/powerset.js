function powerset(array) {
    const subsets = [[]];
    console.log(subsets.length);
	for(const ele of array){
        const length = subsets.length;      
		for(let i=0;i<length;i++) {
			const currentSubset = subsets[i];
		   subsets.push(currentSubset.concat(ele));			
		}
		
	}
	return subsets;	
}

console.log(powerset([1,2,3]));