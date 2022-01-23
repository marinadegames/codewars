function digital_root(n) {
  let result = 0
  String(n).split('').map( v => {
    result += Number(v)
  })
  return result > 9 ? digital_root(result) : result
}
