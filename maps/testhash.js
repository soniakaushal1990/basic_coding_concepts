var animal = {};
// Add keys to the hashmap
animal["cat"] = { sound: "meow", age:8 };
animal["dog"] = { sound: "bark", age:10 };
animal["bird"] = { sound: "tweet", age:2 };
animal["cow"] = { sound: "moo", age:5 };
console.log(animal);
// console.time();
// for (var key in animal) {
// //console.log(1);
//     if(animal[key]=="cat"){
//         animal[cat].sound = "hiss";
//     }
// }
// console.timeEnd();
//console.log(animal);
let cat = "cat";
console.time();
if (cat in animal)
{
     // modify cat key here
    animal[cat].sound = "hiss";
}

console.timeEnd();
console.log(animal);
