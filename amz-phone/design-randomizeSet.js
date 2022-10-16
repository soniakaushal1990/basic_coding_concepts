class RandomizedSet {
    constructor(){
        this.values = [];
        this.map = new Map();
      
    }
    
    insert(val){
        if(this.has(val)) return false;        
        this.map.set(val,this.values.length);
        this.values.push(val);
        return true;
    }
    
    
    remove(val){
        
        if(!this.map.has(val)) return false;       
        const idx = this.map.get(val);
        const last = this.values[this.values.length-1];      
        this.swap(idx);
        this.map.set(last,idx);
        this.map.delete(val);
        this.values.pop();
        return true
    }
   
    getRandom(){
       
       return this.values[Math.floor(Math.random() * this.values.length)];
    } 
    
    swap(idx){
         [this.values[idx],this.values[this.values.length-1]] =            
        [this.values[this.values.length-1],this.values[idx]];  
    }
}


 /* Your RandomizedSet object will be instantiated and called as such: 
 
["RandomizedSet","insert","insert","remove","insert","remove","getRandom"]
[[],[0],[1],[0],[2],[1],[]]
 
 */
 var obj = new RandomizedSet()

 var param_1 = obj.insert(0);
 var param_1 = obj.insert(1);
 var param_1 = obj.insert(2);
 console.log(obj.map);
 console.log(obj.values);


//  var param_1 = obj.insert(1);
//  var remove = obj.remove(0)
//  var insert = obj.insert(2)

//  var remove = obj.remove(1)
//  var random = obj.getRandom();
//  console.log(obj.map);
//  console.log(obj.values);

// console.log(random);
//  console.log(obj.values);
