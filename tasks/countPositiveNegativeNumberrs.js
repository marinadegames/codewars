function countPositivesSumNegatives(input) {
  if (input === null || input.length === 0){
    return [];
  }
  const arrPositive = [];
  const arrNegative = [];
  
  if (input.length === 0) {
    return [];
  }
  
  input.forEach(el => {
    if (el > 0) {
      arrPositive.push(el) 
    } else if (el < 0) {
      arrNegative.push(el)
    }
  })

  const sumNegative = arrNegative.reduce(function(sum, elem) {
	  return sum + elem;
  }, 0);

  if (arrPositive.length === null || arrPositive.length === 0){
      return [0, sumNegative]
  }  else {
      return [arrPositive.length, sumNegative]
  }
  
}


