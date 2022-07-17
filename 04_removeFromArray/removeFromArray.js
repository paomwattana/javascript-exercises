const removeFromArray = function(array, ...elem) {
    // rest parameter method ///////////////
    // search for each elements to be removed
    // if found, remove - duh
    elem.forEach(element => {
        for (let i = 0; i < array.length; ++i)
            if (element === array[i])
                array.splice(i, 1);
    });

    /*
    // arguments object method ////////////
    // arguments[0] as original array
    // arguments[1+] as elements to be removed, if found
    for (let i = 1; i < arguments.length; ++i) {
        for (let j = 0; j < arguments[0].length; ++j) {
            if (arguments[0][j] === arguments[i]) {
                array.splice(j, 1);
            }
        }
    };
    */

    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
