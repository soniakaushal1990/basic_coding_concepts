function last(arr){
    return arr[arr.length-1];
}



class MinStack {
    
    constructor(){
        this.stack = [];
        this.min_stack = [];
    }
    
    
    push(val){
        
        this.stack.push(val);
        
        if(this.min_stack.length == 0 || val <= last(this.min_stack) ) {
            this.min_stack.push(val);
        }
        
    }
    
    
    pop(){
       
        if(last(this.stack) == last(this.min_stack)) this.min_stack.pop();
        
        this.stack.pop();
        
    }
    
    
    top(){
        
        return last(this.stack);
        
    }
    
    
    getMin(){
        
        console.log(this.min_stack);
        
        return last(this.min_stack);
    }
       
}