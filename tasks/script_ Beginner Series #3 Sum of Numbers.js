function getSum(a, b) {
    //Good luck!

    let arr = [];

    if (a > b) {
        for (i = b; i < a + 1; i++) {
            arr.push(i);
        }
    } else {
        for (i = a; i < b + 1; i++) {
            arr.push(i);
        }
    }

    //SUM!

    let res = 0;

    for (let i = 0; i < arr.length; i++) {
        res = res + arr[i];
    }


    return res;
}

console.log(getSum(2, 1));