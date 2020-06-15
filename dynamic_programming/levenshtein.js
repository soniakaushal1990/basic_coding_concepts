
//Time Complexity : O(nm)  Space Complexity :O(nm)

function levenshtein(str1,str2){
    const edits=[];
    for(let i=0;i<str2.length+1;i++){
        const row=[];
        for(let j=0;j<str1.length+1;j++){
            row.push(j);
        }
       
        row[0]=i;
      //  console.log(row[0]);
        edits.push(row);
       // console.log(edits);
    }
  //  console.log(edits);
    for(let i=1;i<str2.length+1;i++){
      //  console.log(str2);
       // console.log(str1);
        for(let j=1;j<str1.length+1;j++){
           
            if(str2[i-1] === str1[j-1]){
                edits[i][j]=edits[i-1][j-1];
            } else{
                if(i==1){
                    console.log(Math.min(edits[i-1][j-1],edits[i-1][j],edits[i][j-1]));
                }
                edits[i][j]=1+Math.min(edits[i-1][j-1],edits[i-1][j],edits[i][j-1]);
            }
        }
    }
  //  console.log(edits);
    return edits[str2.length][str1.length];
}
levenshtein("abc","yabd");