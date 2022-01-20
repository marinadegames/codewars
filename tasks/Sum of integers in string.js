function sumOfIntegersInString(s){
  return s.replace(/[^0-9]/g, ' ').split(' ').filter( v => v != '').map( v => Number(v)).reduce((acc, num) => acc + num, 0)
}
