let str = 'sLJIB   iRF     nAT   kJXG  ';

function stringTransformer(str) {
    // Your code here
    let array = str.replace(/ +(?= )/g,'').trim().split(' ').reverse();
    let result = [];
    for (let i = 0; i < array.length; i++) {

        let word = array[i];
        let wordArray = word.split('');

        for (let j = 0; j < array.length; j++) {
            if (wordArray[j] === wordArray[j].toUpperCase()){
                wordArray[j] = wordArray[j].toLowerCase()
            }else{
                wordArray[j] = wordArray[j].toUpperCase()
            }
        }
        wordArray = wordArray.join('');
        console.log(wordArray)
    }

    return array;

  }

stringTransformer(str);  