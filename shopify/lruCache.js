class lruCache{
    constructor(capacity){
        this.cache = new Map();
        this.capacity= capacity;
    }


    //Given a key return value of key if exist else return -1
    get(key){

        const value = this.cache.get(key);
        if(this.cache.has(key)){
            this.cache.delete(key);
            this.cache.set(key,value);
            return this.cache.get(key);
        } 
        return -1;

    }
    put(key,value){

        if(this.cache.has(key)) {
            this.cache.delete(key);
            
        }  
        this.cache.set(key,value);     
        if(this.cache.size > this.capacity) this.cache.delete(this.cache.keys().next().value)     

    }

}


let lrucache = new lruCache(2);

lrucache.put(1,'h');
lrucache.put(2,'y');

console.log(lrucache.get(1));