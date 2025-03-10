const helloFunction = function() {
    console.log("Hello, World!");
}
helloFunction();

// Arrow function

const helloArrow = () => { // no params
    console.log("Hello, Arrow!");
};

helloArrow();

// with some param

const helloArrowWithParam = (name) => {
    console.log(`Hello, ${name}`);
};

helloArrowWithParam("John");