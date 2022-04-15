function countBy(x, n) {
    let z = [];
    let max = x * n
    
    for (let i = 1; i < max + 1; i++){
      if (i % x === 0) {
        z.push(i)
      }
    }
    return z;
  }