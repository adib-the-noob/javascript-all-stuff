const grades = [75, 50, 90, 80, 60];

const maximum = grades.reduce(getMax);
const minimum = grades.reduce(getMinimum);

console.log(maximum);
console.log(minimum);


function getMax(accumulator, elemnet) {
    return Math.max(accumulator, elemnet);
}

function getMinimum(accumulator, element) {
    return Math.min(accumulator, element);
}