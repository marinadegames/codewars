function isIsogram(str){
  let arr = str.toLowerCase().split('')
  
  for (let i = 0; i < arr.length; i++){
    for (let j = i + 1; j < arr.length; j++){
      if (arr[i] === arr[j]) return false
    }
  }
  return true
}

let str = 'isOgram'
console.log(isIsogram(str))