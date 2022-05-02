let Summation = function (num) {
    let sum = 0;

    for (let i = 1; i < num + 1; i++) {
        console.log(i);
        sum = sum + i;
    }
    return sum;
}

console.log('sum: ' + Summation(8)); 