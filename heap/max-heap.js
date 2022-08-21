/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
 var kthSmallest = function(matrix, k) {
    class MaxHeap {
        constructor(capacity){
            this.capacity = capacity;
            this.values = [];
        }
        
        add(val){
            this.values.push(val);
            this.bubbleUp(this.values.length-1);
            if(this.values.length > this.capacity) this.remove();
            
        }
        
        remove(){
            
            this.swap(0,this.values.length-1);
            let min = this.values.pop();
            this.trickleDown(0);
            return min;
            
        }
        
        bubbleUp(idx){
            const parent = Math.floor((idx-1)/2);
            let max = idx;
            if(this.values[parent] < this.values[max]) max = parent;
            
            if(max != idx){
                this.swap(max,idx);
                this.bubbleUp(max);
            }
            
        }
        
        trickleDown(idx){
            const leftChild = 2*idx+1;
            const rightChild = 2*idx+2;
            let min = idx;
            
        if(leftChild < this.values.length && this.values[leftChild] > this.values[min]) min = leftChild;
            
    if(rightChild < this.values.length && this.values[rightChild] > this.values[min]) min = rightChild;
            
            if(min !== idx) {
                this.swap(min, idx);
                this.trickleDown(min);
            }
        }
        
        
        swap(i,j){
            [this.values[i],this.values[j]]=[this.values[j],this.values[i]];
        }
        
        
    }
    
    
    
    let maxheap = new MaxHeap(k);
    for(let n of nums){
        maxheap.add(n);
    }
    
    return maxheap.remove();
    
    
};

let nums = [3,2,5,6,4,6,4,1];
console.log(kthSmallest(nums,3));