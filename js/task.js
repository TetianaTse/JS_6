function getNum() {
    do {
        num = parseInt(prompt('Enter the number to be raised to the power:'));
    } while (num <= 0 || isNaN(num));
    return num;
}

function getDegree() {
    do {
        degree = parseInt(prompt('Enter the power of a number:'));
    } while (degree <= 0 || isNaN(degree));
    return degree;
}

function pow(num, degree) {
    if (degree == 1) {
        return num;
    }
    return num * pow(num, degree - 1);
}

function count() {
    let num = getNum();
    let degree = getDegree();
    return pow(num, degree);
}

console.log(count());