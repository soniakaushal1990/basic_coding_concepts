var canFinish = function(numCourses, prerequisites) {
  const order = [];
  const courseMap = new Map();
  const indegree = new Array(numCourses).fill(0);
  const queue = [];
    
    for(const [course,pre] of prerequisites){
        if(courseMap.has(course)){
            courseMap.get(course).push(pre);
        }else {
            courseMap.set(course,[pre]);
        }
        
        console.log(courseMap);
        
        indegree[pre]++
    }
    
    
    for(let i = 0;i < indegree.length ; i++ ){
        if(indegree[i] == 0) queue.push(i);
    }
    
    
    while(queue.length){
        const course = queue.shift();
        if(courseMap.has(course)){          
            for(const pre of courseMap.get(course)){
                indegree[pre]--;
               if(indegree[pre] == 0) queue.push(pre);              
            }           
        }       
        order.push(course);
    }
    
    
   return numCourses === order.length;
};
