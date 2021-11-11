function presses(phrase) {
  // To do...
  
  let count = 0;
  let arr = phrase.split('');
  for (let i = 0; i < arr.length; i++){
    
    if (arr[i] == 'a' || arr[i] == 'A'){
      count = count + 1
    }else if (arr[i] == 'b' || arr[i] == 'B' ){
      count = count + 2
    }else if (arr[i] == 'c' || arr[i] == 'C' ){
      count = count + 3
    }else if (arr[i] == 'd' || arr[i] == 'D' ){
      count = count + 1
    }else if (arr[i] == 'e' || arr[i] == 'E' ){
      count = count + 2
    }else if (arr[i] == 'f' || arr[i] == 'F' ){
      count = count + 3
    }else if (arr[i] == 'g' || arr[i] == 'G' ){
      count = count + 1
    }else if (arr[i] == 'h' || arr[i] == 'H' ){
      count = count + 2
    }else if (arr[i] == 'i' || arr[i] == 'I' ){
      count = count + 3
    }else if (arr[i] == 'j' || arr[i] == 'J' ){
      count = count + 1
    }else if (arr[i] == 'k' || arr[i] == 'K' ){
      count = count + 2
    }else if (arr[i] == 'l' || arr[i] == 'L' ){
      count = count + 3
    }else if (arr[i] == 'm' || arr[i] == 'M' ){
      count = count + 1
    }else if (arr[i] == 'n' || arr[i] == 'N' ){
      count = count + 2
    }else if (arr[i] == 'o' || arr[i] == 'O' ){
      count = count + 3
    }else if (arr[i] == 'p' || arr[i] == 'P' ){
      count = count + 1
    }else if (arr[i] == 'q' || arr[i] == 'Q' ){
      count = count + 2
    }else if (arr[i] == 'r' || arr[i] == 'R' ){
      count = count + 3
    }else if (arr[i] == 's' || arr[i] == 'S' ){
      count = count + 4
    }else if (arr[i] == 't' || arr[i] == 'T' ){
      count = count + 1
    }else if (arr[i] == 'u' || arr[i] == 'U' ){
      count = count + 2
    }else if (arr[i] == 'v' || arr[i] == 'V' ){
      count = count + 3
    }else if (arr[i] == 'w' || arr[i] == 'W' ){
      count = count + 1
    }else if (arr[i] == 'x' || arr[i] == 'X' ){
      count = count + 2
    }else if (arr[i] == 'y' || arr[i] == 'Y' ){
      count = count + 3
    }else if (arr[i] == 'z' || arr[i] == 'Z' ){
      count = count + 4
    }else if (arr[i] == ' '){
      count = count + 1
    }else if (arr[i] == 1){
      count = count + 1
    }else if (arr[i] == 2){
      count = count + 4
    }else if (arr[i] == 3){
      count = count + 4
    }else if (arr[i] == 5){
      count = count + 4
    }else if (arr[i] == 5){
      count = count + 4
    }else if (arr[i] == 6){
      count = count + 4
    }else if (arr[i] == 7){
      count = count + 5
    }else if (arr[i] == 8){
      count = count + 4
    }else if (arr[i] == 9){
      count = count + 5
    }else if (arr[i] == '*'){
      count = count + 1
    }else if (arr[i] == '#'){
      count = count + 1
    }else if (arr[i] == 0){
      count = count + 2
    }
    
    
  }
  return count; 
}
