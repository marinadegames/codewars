// 348597 => [7,9,5,8,4,3]
// 0 => [0]


function digitize(n) {
    return n.toString().split('').reverse().map(n => Number(n))
}

console.log(digitize(348597))