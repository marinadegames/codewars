function uniTotal(str) {

    let arr = str.split('');
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i].charCodeAt(0)
    }
    return sum
}

console.log(uniTotal('aaa'))