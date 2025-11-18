// Problem 1:

const formatValue = (value: unknown) => {
    if (typeof value === 'string') {
        return value.toUpperCase()
    }
    else if (typeof value === 'number') {
        return value * 10;
    }
    else {
        if (value === true) {
            return false;
        }
        else {
            return true;
        }

    }

    return value;
}


// Problem 2:

const getLength = (input: unknown): unknown => {
    if (typeof input === 'string') {
        return input.length
    }
    else if (Array.isArray(input)) {
        return input.length
    }
    return input
}


// console.log(getLength('Alhamdulliah'));
// console.log(getLength(["Apple", "komola", 1, true]));





