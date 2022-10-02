// Given an integer array nums and an integer k, return the kth largest element in the array.

// Note that it is the kth largest element in the sorted order, not the kth distinct element.

// You must solve it in O(n) time complexity.

var kthLargest = function(arr,k){


    class MinHeap {
        constructor(capacity){
            this.values = [];
            this.capacity = capacity;
        }

        add(val){
            this.values.push(val);
            this.bubbleUp(this.values.length-1);
            if(this.values.length > this.capacity) this.remove();

        }

        remove(){

            this.swap(0,this.values.length-1);
            const min = this.values.pop();
            this.trickleDown(0);

        }

        bubbleUp(idx){

            const parent = Math.floor((idx-1)/2);
            let max = idx;

            if(this.values[max] < this.values[parent]) max = parent;

            if(max != idx){
                this.swap(idx,max);
                this.bubbleUp(max);

            }

        }


        trickleDown(idx){
            const leftChild = 2 * idx + 1;
            const rightChild = 2 * idx + 2;
            let min = idx;

            if(leftChild < this.values.length  && this.values[leftChild] < this.values[min]) min =  leftChild;
            if(rightChild < this.values.length  && this.values[rightChild] < this.values[min]) min =  rightChild;

            if(min != idx){
                this.swap(idx,min);
                this.trickleDown(min);
            }

        }


        swap(i,j){

            [this.values[i],this.values[j]] = [this.values[j],this.values[i]];
        }



    }


    let heap = new MinHeap(k);

    for(let elem of arr){
        heap.add(elem);
    }
  //  console.log(heap.values);

    return heap.values[0];

}


console.log(kthLargest([3,2,1,5,6,4],2));