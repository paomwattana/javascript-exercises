const reverseString = function(string) {
    let res = "";
    for (let i = string.length-1; 0 <= i; --i)
    {
        res += string.charAt(i);
    }
    return res;
};

// Do not edit below this line
module.exports = reverseString;
