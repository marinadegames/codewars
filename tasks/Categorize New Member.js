const input = [[45, 12], [55, 21], [19, -2], [104, 20]]
function openOrSenior(data) {
    return data.map(player => player[0] >= 55 && player[1] > 7 ? 'Senior' : 'Open' )
}
console.log(openOrSenior(input))