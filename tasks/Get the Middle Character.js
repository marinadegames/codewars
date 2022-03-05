// Get the Middle Character
//
// Kata.getMiddle("test") should return "es"
//
// Kata.getMiddle("testing") should return "t"
//
// Kata.getMiddle("middle") should return "dd"
//
// Kata.getMiddle("A") should return "A"


function getMiddle(s) {
    let arr = s.split('')
    if (arr.length % 2 === 0) {
        let middle = arr.length / 2
        return arr[middle - 1] + arr[middle]
    }
    if (arr.length % 2 !== 0) {
        return arr[(arr.length / 2) - 0.5]
    }

    return arr
}

console.log(getMiddle('testing'))