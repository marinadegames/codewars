// S is misinterpreted as 5
// O is misinterpreted as 0
// I is misinterpreted as 1



function correct(string) {
    const arr = string.split('')
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === '5') arr[i] = 'S'
        if (arr[i] === '0') arr[i] = 'O'
        if (arr[i] === '1') arr[i] = 'I'
    }
    return arr.join('')
}
console.log(correct("51NGAP0RE"))