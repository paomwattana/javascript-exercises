const sumAll = function(low, high) {
    // cannot be negative
    // numbers only
    if (low < 0 || high < 0
        || typeof low != "number"
        || typeof high != "number")
        return "ERROR";

    // swap if params are not in order
    if (high < low) {
        let temp = low;
        low = high;
        high = temp;
    }
    let res = 0;
    for (let i = low; i <= high; ++i) {
        res += i;
    }
    return res;
};

// Do not edit below this line
module.exports = sumAll;
