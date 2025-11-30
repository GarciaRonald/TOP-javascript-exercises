const sumAll = function(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        return 'ERROR';
    } else if (a < 0 || b < 0) {
        return 'ERROR';
    } else if (a % 1 > 0 || b % 1 > 0) {
        return 'ERROR';
    }

    let range = [a, b].sort((a, b) => a - b);
    let sum = 0;

    for (let i = range[0]; i <= range[1]; i++) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
