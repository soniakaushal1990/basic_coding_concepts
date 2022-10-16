/**
 * @param {number} num
 * @return {string}
 */
 const UNITS = {
    0: '',
    1: 'One',
    2: 'Two',
    3: 'Three',
    4: 'Four',
    5: 'Five',
    6: 'Six',
    7: 'Seven',
    8: 'Eight',
    9: 'Nine',
    10:'Ten'
};

const TEENS = {
    11: 'Eleven',
    12: 'Twelve',
    13: 'Thirteen',
    14: 'Fourteen',
    15: 'Fifteen',
    16: 'Sixteen',
    17: 'Seventeen',
    18: 'Eighteen',
    19: 'Nineteen'
};

const TENS = {
    0: '',
    1: 'Ten',
    2: 'Twenty',
    3: 'Thirty',
    4: 'Forty',
    5: 'Fifty',
    6: 'Sixty',
    7: 'Seventy',
    8: 'Eighty',
    9: 'Ninety'
};

const THOUSANDS = {
    0: '',
    1: 'Thousand',
    2: 'Million',
    3: 'Billion'
};

const numberToWords = (num) => {
    if(num === 0) return 'Zero';
    let accum = '',
        position = 0;
    while(num > 0) {
        const   thousandth = num % 1000,
                numText = threeToText(thousandth, position);
        accum = accum === '' ? `${numText}` : numText === '' ? accum : `${numText} ${accum}`;
        num = Math.floor(num / 1000);
        position += 1;
    }
    return accum;
};

const threeToText = (num, position) => {
    const   tens = num % 100,
            hundreds = Math.floor(num / 100);
    
    const   tensText = tensToText(tens), 
            hundredsText = hundreds > 0 ? `${UNITS[hundreds]} Hundred` : '';

    let out = '';

    out = tensText !== '' && hundredsText !== '' ? `${hundredsText} ${tensText}`: //first if
           hundredsText === '' ? tensText  // second else if
            : hundredsText; // default

    out = position === 0 ? out : out === '' ? '' : `${out} ${THOUSANDS[position]}`;
    return out;
};

const tensToText = (val) => { 
    if(val <= 10) return UNITS[val];
    
    if(val < 20) return TEENS[val]; 
    
    const   units = val % 10; 
            tens = Math.floor(val / 10),
            tensText = TENS[tens];

    if(units === 0) return tensText;

    return `${tensText} ${UNITS[units]}`;
};