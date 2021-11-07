function high(x){
    let wordList = x.split(' ');
    let getScore = (word) => {
      return word.split('').reduce((prevScore, currWord) => prevScore + currWord.charCodeAt(0) - 96, 0)
    }
    let scoreList = wordList.map(word => getScore(word));
    let highestIndex = 0;
    let highestScore = 0;
    scoreList.forEach((score, i) => {
      if (score > highestScore) {
        highestIndex = i;
        highestScore = score;
      }
    });
    return wordList[highestIndex];
  }