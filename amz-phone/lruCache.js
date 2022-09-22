class lruCache {
    constructor(capacity){
        this.capacity = capacity;
        this.map = new Map();

    }

    get(key){

        if(!this.map.has(key)) return -1;

        let val = this.map.get(key);

        this.put(key,val);

        return val;

    }


    put(key,value){

        this.map.delete(key);

        if(this.map.size == this.capacity) this.map.delete(this.map.keys().next().value);

        this.map.set(key,value);

    }
}