function remainder(a, b){

    if (a>b) return a%b
    else if (b>a) return b%a
    else if (a===b) return a%b
    else return NaN
}

console.log(remainder(5,5))