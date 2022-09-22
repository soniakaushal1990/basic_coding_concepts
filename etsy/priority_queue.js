/*

~ Priority Queue ~


Part I - Write Code
--------------------

We'd like you to build a priority queue using JavaScript.

A priority queue is an abstract data type just like a regular queue or stack data structure, but where each element has a "priority" associated with it. In a priority queue, an element with the highest priority is returned before an element with low priority.

Note: Your implementation does not need to be optimized for time or space.

*/


//--------------------


class PriorityQueue {

    constructor(){
  
      this.values = [];
    }
  
    add(item,priority){
      this.values.push([item,priority]);
    }
  
    pop(){
  
      // Iterate thru the array 
      //max curr 
  
      let highestPriority = 0;
      let fruit;
      let indexToRemove=0;
  
      for(let i=0;i<this.values.length;i++){
  
      //  console.log(this.values[i]);
        let currPriority = this.values[i][1];
  
        if(currPriority > highestPriority){
          highestPriority = currPriority;
          fruit = this.values[i][0];
          indexToRemove = i;
  
        }  
      
      }
  
      this.values.splice(indexToRemove,1);
      console.log(this.values);
      return fruit;
  }
  
  
  
  }
  
  
  
  
  //-
  
  
  // Your priority queue should be able to do three things.
  //
  // 1. Be instantiated.
  const pqueue = new PriorityQueue();
   
  // 2. Allow multiple items to be inserted via the `add` method.
  pqueue.add('apple', 10);
  pqueue.add('guava', 25);
  pqueue.add('kiwi', 3);
  pqueue.add('durian', 401);
  //pqueue.add('abcs', 401);
   
  // 3. Return the highest priority item and remove it from the queue.
  const item = pqueue.pop();
  console.log(item);
  
  // Note: In this case `.pop()` would return the exotic fruit with the highest priority of 401 and remove it from the queue. So item would equal 'durian'.
  
  const item_two = pqueue.pop(); // returns 'guava'
  console.log(item_two);
  
  /*
  
  Part II - Test Code & Edge Cases
  --------------------
  - What are the edge cases you'd think about?
  - Can you write some tests for this code?
  - You don't need to use an external testing library.
  
  Part III - Error Handling & Productionizing
  --------------------
  - How would you handle them if this was a production system?
  - Which edge cases would you log, which ones would you throw an exception for?
  - How would you decide what error level to use if you were logging an error?
  
  Part IV - Efficiency
  --------------------
  - How would you improve the efficiency of this code?
  - What would be the scaling bottlenecks?
  */