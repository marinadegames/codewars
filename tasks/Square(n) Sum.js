function squareSum(numbers){

    let sum = 0
    let multArr = numbers.map( n => n*n)

    for (let i = 0; i < multArr.length; i++) {
        sum = sum + multArr[i]
    }

    return sum

}


console.log(squareSum([1,2,2]))