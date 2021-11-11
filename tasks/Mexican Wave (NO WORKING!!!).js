function wave(str){
  // Code here
  for (let i = 0; i < str.length; i++){
    let arr = [];
    let letter = str[i];
    if (letter === ' '){
      continue
    }else{
      arr.push(str.slice(0, i) + letter.toUpperCase() + str.slice(i + 1))    
    }
  }
  return arr;
}
wave('codewars');
