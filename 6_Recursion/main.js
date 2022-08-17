// Задание 1
function getResult(a) {
    return (b) => {
        return a * b;
    }
}

// Задание 2

function getValue(array) {
    const numbers = array.filter(item => isFinite(item));
    const sum = numbers.reduce(function (prev, current) {
        return (prev + current);
    });
    const length = numbers.length;
    return sum / length;
}


// Задание 3

function getString(word, symbol) {
    if (Array.isArray(symbol)) {
        for (let item of symbol) {
            if (word.includes(item)) {
                word = getString(word.replaceAll(item, ""), item);
            }
        }
    } else {
        let value = word.replaceAll(symbol, '');
        return value;
    }
    return word;
}




