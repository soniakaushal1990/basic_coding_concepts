// async function removeDuplicates(myArr, prop) {
//   try {
//     return myArr.filter((obj, pos, arr) => {
//       return arr.map(mapObj => mapObj[prop]).indexOf(obj[prop]) === pos;
//     });
//   } catch (error) {
//     throw error;
//   }
// }


async function removeDuplicates(myArr, prop) {
  try {
   return myArr.filter((obj,pos,arr)=>{
     var x=  arr.map(mapobj =>mapobj[prop]).indexOf(obj[prop]) === pos;
     console.log(obj);
     console.log(x);
   })
      
  } catch (error) {
    throw error;
  }
}

// function uniqueArray(arr) {
//   var hashMap = {};
//   var uniqueArr = [];

//   for (var i = 0; i < arr.length; i++) {
//     if (!hashMap.hasOwnProperty(arr[i])) {
//       uniqueArr.push(arr[i]);
//       hashMap[arr[i]] = i;
//     }
//   }
//   return uniqueArr;
// }
var final_array = [];
for(i=0;i<100;i++){
  if(i<10){
    var obj = {
      "name" : "sonia"
    }
  }
  else {
    var obj = {
      "name" : "sonia"+i
    }
  }
  final_array.push(obj);
}

// console.log(final_array);


let array = removeDuplicates(final_array, "name");
console.log(array);