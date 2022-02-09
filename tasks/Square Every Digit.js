function squareDigits(num){
  return Number(num.toString().split('').map( n => n * n).join(''))

}
//"squareDigits(3212) should equal 9414"
console.log(squareDigits(3212))