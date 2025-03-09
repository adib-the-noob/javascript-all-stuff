function all_fruites(...fruites){
    console.log(fruites[1]);
    console.log(fruites[3]);
    console.log(fruites[4]);
    console.log(fruites[2]);
}

all_fruites("Apple", "Banana", "Mango", "Orange", "Grapes");    
console.log("=============================================");

function return_sum(...numbers) {
    let result = 0;
    let number;
    for (number in numbers){
        result = result + numbers[number];
    }
    return result;
}

let sum = return_sum(1, 2, 3, 4, 5);
console.log(sum);
