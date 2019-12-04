let dataSet = [
    {
        "ID": 1,
        "Phone": "(403) 125-2552",
        "City": "Coevorden",
        "Name": "Grady"
    },
    {
        "ID": 2,
        "parentID": 1,
        "Phone": "(979) 486-1932",
        "City": "Chełm",
        "Name": "Scarlet"
    },
    {
        "ID": 3,
        "parentID": 2,
        "Phone": "(979) 486-1932",
        "City": "Chełm",
        "Name": "Scarlet"
    }
];


function createDataTree(dataset)  
{
    let hashTable = Object.create(null);
    dataset.forEach( aData => hashTable[aData.ID] = { ...aData, childNodes : [] } )
  //  console.log(dataset);
    let dataTree = [];
    dataset.forEach( aData => {
    if( aData.parentID ) {
  
          hashTable[aData.parentID].childNodes.push(hashTable[aData.ID])
      }
    else 
    {
       
        dataTree.push(hashTable[aData.ID]);
       
    }
    } )
    console.log(dataTree);
    return dataTree;
}
createDataTree(dataSet);