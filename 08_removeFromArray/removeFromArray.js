const removeFromArray = function(arr, arg) {
    let myArgs = Object.values(arguments);

    for (let i = 0; i < arr.length; i++) {
        for (let j = 1; j < myArgs.length; j++) {
            if (arr.includes(myArgs[j])) {
                arr.splice(arr.indexOf(myArgs[j]), 1);
            }
        }
    }

    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
