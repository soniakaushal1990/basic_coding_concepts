//Create min max stack
//All the function runs in O(1) and space complexity O(1)
class minMaxStack{
    constructor(){
        this.minMaxStack=[];
        this.stack=[];
    }
    peek(){
        return this.stack[this.stack.length-1];
    }
    pop(){
        this.minMaxStack.pop();
        return this.stack.pop();

    }
    push(number){
        const newMinMax = {min:number,max:number};
        if(this.minMaxStack.length){
            const lastMinMax= this.minMaxStack[this.minMaxStack.length-1];
            newMinMax.min = Math.min(lastMinMax.min,number);
        }
        this.minMaxStack.push(newMinMax);
        this.stack.push(number);
    }
    getMin(){
        return this.minMaxStack[this.minMaxStack.length-1].min;
    }
    getMax(){
        return this.minMaxStack[this.minMaxStack.length-1].max;
    }
}
let stack = new minMaxStack();
stack.push(2);
stack.push(3);
//console.log(stack.pop());
console.log(stack.getMin());
console.log(stack.getMax());
//console.log(stack);
