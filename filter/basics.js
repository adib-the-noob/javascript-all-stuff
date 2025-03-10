const words =  ["apple", "banana", "cherry", "date", "elderberry", "fig", "grape", "honeydew", "kiwi", "lemon"];
const shortWords = words.filter(getShotWords);
console.log(words);


function getShotWords(element) {
    return element.lenght < 5;
}