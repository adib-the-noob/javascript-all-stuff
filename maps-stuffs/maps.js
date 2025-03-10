const numbers = [1, 2, 3, 4, 5];

const sqr_answers = numbers.map(square);
console.log(sqr_answers);

function square(number) {
  return number ** 2;
}

// uppercase
let names = ['Alice', 'Bob', 'Charlie', 'David'];
let upper = names.map(uppercase);
console.log(upper);

function uppercase(str) {
  return str.toUpperCase();
}