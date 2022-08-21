/*

arr1 = [1,3,4]
Output = [(1,1),(3,4)]

arr2 = [1,2,3,4,5]
Output = [(1,5)]

arr3 = [1,1,1,3,4,5,6,7,9]
Output = [(1,1), (3,7), (9,9)]


*/


class ConsectiveRanges{

    constructor(){

    }

    //Given a list of integers
    //Return list of consevtive ranges
    getConsectiveRanges(list){

        let left = 0, right = 0 , result= [];
       
       for(let i=1; i <= list.length; i++){
            if(list[i] == list[right] || list[right]+1 == list[i]){
                    right++;
            }else{

                result.push([list[left],list[right]]);
                left=right+1;
                right+=1;

            }
        }

        return result;

    }

}

let consecRanges = new ConsectiveRanges();
console.log(consecRanges.getConsectiveRanges([1,2,3,4,5]));