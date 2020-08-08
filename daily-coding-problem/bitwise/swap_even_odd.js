function swap_bits(x) {
    let EVEN = 0b10101010;
    let ODD = 0b01010101
    return (x & EVEN) >> 1 | (x & ODD) << 1;
}

console.log(swap_bits(10101010));