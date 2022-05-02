let countBits = function(n) {
  return (n)
    .toString(2)
    .split('')
    .map(n => Number(n))
    .filter( i => i === 1)
    .reduce ( (a,b) => a+b, 0)
};

console.log(countBits(5303646878)) 
