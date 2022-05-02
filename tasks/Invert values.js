function invert(array) {
   return array.map( n => Math.sign(n) === -1 ? Math.abs(n) : -Math.abs(n) )
}
