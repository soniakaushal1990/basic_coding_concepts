var reorderLogFiles = function(logs) {

    
    const body = s => s.slice(s.indexOf(' ')+1);
    const iden = s => s.slice(0,s.indexOf(' '));

    const isNum = s => /\d/.test(s);

    const compare = (a, b) => {
    const n = body(a).localeCompare(body(b));
    
        if (n !== 0) return n;

        return iden(a).localeCompare(iden(b));

    };

    const digitLogs = [];
    const letterLogs = [];
    for (const log of logs) {
        if (isNum(body(log))) digitLogs.push(log);
        else letterLogs.push(log);
    }
  return [...letterLogs.sort(compare), ...digitLogs];
    
};

