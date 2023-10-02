function getDivisorsCnt(n) {
    let count = 0;

    for (let i = 1; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            count += (i === n / i) ? 1 : 2;
        }
    }

    return count;
}


console.log(getDivisorsCnt(4))
