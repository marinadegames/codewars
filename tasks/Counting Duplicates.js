let text = 'aabBkkkretecd';

function duplicateCount(text){
  let arr = text.toLowerCase().split('');
  let result = [];
  
  for (i = 0; i < arr.length; i++){
    let count = 0;
    for (j = 0; j < arr.length; j++){
      if (arr[i] === arr[j]) count = count + 1
    }
    if (count >= 2 ) result.push(arr[i])
  }
  
  function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}
  let end = result.filter(onlyUnique);
  return end.length;
}

console.log(duplicateCount(text))
