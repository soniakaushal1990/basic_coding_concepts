class RandomizedCollection {
    constructor(){
      this.map = new Map();
      this.values = [];    
    }
    
    
    insert(val){
        
        if(this.map.has(val)){
            
            this.map.get(val).push(this.values.length);
            this.values.push(val);
            return false;
            
        }else{
            this.map.set(val,[this.values.length]);
            this.values.push(val);
            return true;
        }
        
    }

    remove(val){
        
        if(!this.map.has(val)) return false;
        
        const idx = this.map.get(val).pop();
        const last = this.values[this.values.length-1];

        console.log(this.values);

        [this.values[idx],this.values[this.values.length-1]] = [this.values[this.values.length-1],this.values[idx]];
        
        console.log(this.values);
        console.log(last);
        
        this.map.get(last).push(idx);
        this.map.get(last).pop();
        this.values.pop();
        return true;
    
    }
    
    
    getRandom(){
        return this.values[Math.floor(Math.random() * this.values.length)];
    }
    
    
}

/** 
 * Your RandomizedCollection object will be instantiated and called as such:

 */


 var obj = new RandomizedCollection()
 var param_1 = obj.insert(1);
 console.log(obj.map);
 var param_2 = obj.remove(1);

 console.log(obj.map);
 console.log(obj.values);

//  var param_3 = obj.insert(1);

//  console.log(obj.map);
//  console.log(obj.values);