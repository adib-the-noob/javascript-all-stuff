// function decleration => a reusable block of code that can be used to perform a task
function hello(){
    console.log("this is adib");
}
// function expressions => a way to define function as values or varible

const hello2 = function(){
    console.log("this is adib, from hello 2");
}

hello();
hello2(); // expression

// setTimeout(callback, 3000); // callback function
setTimeout(hello2, 3000); // callback function
setTimeout(function(){
    console.log("this is adib, from hello 3");
}, 3000); // callback function