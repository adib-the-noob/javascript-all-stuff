const numbers = [1, 2, 3, 5, 6]
const results = numbers.map(doSquare);
console.log(results);

function doSquare(elements){
    return Math.pow(elements, 2);
}

const cubeResults = numbers.map(function cube(elements) {
    return Math.pow(elements, 3);
})

const total = numbers.reduce(function sum(total, num) {
    return total + num;
});
console.log("total: " + total);
console.log(cubeResults);