function getNum(text) {
    let num;
    do {
        num = parseInt(prompt(text));
    } while (num <= 0 || isNaN(num));
    return num;
}

function pow(num, degree) {
    if (degree == 1) {
        return num;
    }
    return num * pow(num, degree - 1);
}

function count() {
    let num = getNum('Enter the number to be raised to the power:');
    let degree = getNum('Enter the power of a number:');
    return pow(num, degree);
}

console.log(count());