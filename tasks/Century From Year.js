function century(year) {

    return Math.floor((year-1)/100) + 1;

}

console.log(century(1702))


// 1705 --> 18
// 1900 --> 19
// 1601 --> 17
// 2000 --> 20