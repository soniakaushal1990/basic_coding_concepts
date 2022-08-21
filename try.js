function pangrams(s) {
    let set = new Set(['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']);
   // console.log(set);
    let str = s.replace(/\s/g, '');
    for(let i=0;i<str.length;i++){
        let st = str[i].toLowerCase();   
        if(set.has(st)) {
           console.log(st);
        }else {
            console.log('not')
        }
       
    }
    
    return '1';
}

console.log(pangrams('We promptly judged antique ivory buckles for the prize'));