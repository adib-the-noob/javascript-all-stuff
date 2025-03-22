function walkDog() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('walk dog');
        }, 1000);
    }
    );
}

function cleanKitchen() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('clean kitchen');
        }, 2000);
    }
    );
}

function doLaundry() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('do laundry');
        }, 3000);
    }
    );
}

walkDog().then((result) => {
    console.log(result);
    return cleanKitchen();
}
).then((result) => {
    console.log(result);
    return doLaundry();
}
).then((result) => {
    console.log(result);
    console.log('All tasks are done!');
}
);