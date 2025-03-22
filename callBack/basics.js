function task1(callback) {
    setTimeout(() => {
        console.log('task1');
        callback();
    }, 1300);
}

function task2(callback) {
    setTimeout(() => {
        console.log('task2');
        callback();
    }, 5000);
}

function task3(callback) {
    setTimeout(() => {
        console.log('task3');
        callback();
    }, 3000);
}

function task4(callback) {
    setTimeout(() => {
        console.log('task4');
        callback();
    }, 1000);
}

task1(() => {
    task2(() => {
        task3(() => {
            task4(() => {
                console.log('All tasks are done!');
            });
        });
    });
});