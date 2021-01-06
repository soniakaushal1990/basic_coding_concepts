// Given a list of points on the 2-D plane and an integer K. 
// The task is to find K closest points to the origin and print them.



let input = [[1,3],[-2,2]];
let K=2;

/**
 * 
 * @param {[][]} points 
 * @param {Integer} k 
 */

function kClosestPoints(points,k){
    points.sort((point1,point2) =>{
        const d1FromOrigin = getDistanceFromOrigin(point1);
        const d2FromOrigin = getDistanceFromOrigin(point2);
        return d1FromOrigin-d2FromOrigin;
    });

    //return first k points
    return points.slice(0,k);
}


function getDistanceFromOrigin(point){
    const [x,y]= point;
    return (x*x)+(y*y);
}







console.log(kClosestPoints(input,1));