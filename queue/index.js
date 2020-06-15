//Create a Queue Data structure
class Queue {

    constructor(){
        this.data = [];
    }
    add(record){
        this.data.unshift(record);
        console.log(this.data);
       
    }
    remove(){
        return this.data.pop();
    }
    peek(){
        return this.data[this.data.length-1];
    }
}

module.exports = Queue;