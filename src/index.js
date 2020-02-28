const digitmap = {0: "zero", 1: "one", 2: "two", 3: "three", 4: "four", 5: "five", 6: "six", 7: "seven", 8: "eight", 9: "nine",
            10: "ten", 11: "eleven", 12: "twelve", 13: "thirteen", 14: "fourteen", 15: "fifteen", 16: "sixteen", 17: "seventeen", 18: "eighteen", 19: "nineteen",
            20: "twenty", 30: "thirty", 40: "forty", 50: "fifty", 60: "sixty", 70: "seventy", 80: "eighty", 90: "ninety", 
            100: "hundred", 1000: "thousand"};

module.exports = function toReadable (number) {
    if (number === 0) return digitmap[0]; // zero

    let digits = number.toString().split('').map(elem => +elem).reverse();
    const result = [];

    // 100 - 999, get 1** - 9**
    if (digits[2] >= 1) {
        result.push(digitmap[digits[2]]);
        result.push(digitmap[100]);
        number %= 100;
    }
    // 10 - 19, reset
    if (digits[1] === 1) {
        result.push(digitmap[digits[1]*10 + digits[0]]);
        number = 0;
        digits = [];
    }
    // 20 - 99, get 2* - 9*
    else if (digits[1] >= 2) {
        result.push(digitmap[digits[1] * 10]);
        number %= 10;
    }
    // 1 - 9, reset
    if (digits[0] >= 1) {
        result.push(digitmap[digits[0]]);
        number = 0;
        digits = [];
    }

    console.log(result.join(' '));
    return result.join(' ');
}
