var kClosest = function(points,K){
    
    points.sort((a,b)=> squareDistance(a) - squareDistance(b))
    return points.slice(0,K);
}

const squareDistance = function(a){
    
    return Math.sqrt(a[0]*a[0] +  a[1]*a[1]); 
}