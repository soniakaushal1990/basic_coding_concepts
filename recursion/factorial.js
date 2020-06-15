//function to calculate factorial of a number
function cal_factorial(number){
    if(number == 1) 
    return 1;
    else
    return number*cal_factorial(number-1);

}

let number = 5;
console.log(` Factorial of the ${number} is ${cal_factorial(number)}`);